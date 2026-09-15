import React, { useState } from 'react';
import { publicationsData } from '../data/rlhpData';
import { FileText, Download, Video, BookOpen, Search, CheckCircle, Loader2 } from 'lucide-react';
import { downloadFileInBrowser, downloadPDFDocument } from '../utils/fileDownloader';

export default function PublicationsPage({ onSelectMedia }) {
  const [filterType, setFilterType] = useState('All');
  const [downloadingId, setDownloadingId] = useState(null);
  const [downloadSuccess, setDownloadSuccess] = useState('');

  const filteredPubs = publicationsData.filter(p => filterType === 'All' || p.type === filterType);

  const handleDownload = async (pub) => {
    if (pub.type === 'IEP Video') {
      if (onSelectMedia) onSelectMedia(pub);
      return;
    }

    setDownloadingId(pub.id);
    setDownloadSuccess(`Generating PDF document for "${pub.title}"...`);
    
    await downloadPDFDocument({
      title: pub.title,
      category: pub.type,
      date: pub.year,
      location: 'Mysuru, Karnataka, India',
      content: `Official ${pub.type} document published by Rural Literacy & Health Programme (RLHP), Mysuru.\n\nDocument Title: ${pub.title}\nPublication Year: ${pub.year}\nFormat: ${pub.format}\nFile Size: ${pub.size}\n\nExecutive Summary:\nThis official document presents the detailed activity accounts, statutory governance, financial transparency audits, and community impact reports of Rural Literacy & Health Programme (RLHP) for ${pub.year}.\n\nRLHP interventions span Child Rights & Protection (AshaKirana & AshaBhavana shelter homes), Women Empowerment (Dwani & Belaku Sangha Federations), Learning Disability support (Individualized Education Plan - IEP), and Humanitarian Emergency Relief across Mysore and neighboring districts in Karnataka.`,
      image: pub.image || '/images/gallery/ashakirana_activities.jpg'
    });

    setDownloadingId(null);
    setDownloadSuccess(`Downloaded "${pub.title}.pdf" successfully!`);
    setTimeout(() => setDownloadSuccess(''), 4000);
  };

  return (
    <div className="space-y-12 font-sans pb-12">
      <section className="bg-rlhp-darkgreen text-white py-16 px-4 sm:px-8 text-center">
        <div className="max-w-7xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold">Publications & IEP Modules</h1>
          <p className="text-xs sm:text-sm text-rlhp-lightgreen max-w-xl mx-auto font-medium">
            Download official audit reports, handbooks, newsletters & educational video training modules
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {downloadSuccess && (
          <div className="p-3 bg-green-100 border border-green-300 text-green-800 rounded-xl text-xs flex items-center space-x-2 animate-in fade-in">
            <CheckCircle size={16} />
            <span>{downloadSuccess}</span>
          </div>
        )}

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 justify-center">
          {['All', 'Annual Report', 'Newsletter', 'Book Publication', 'IEP Video'].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${filterType === type ? 'bg-rlhp-green text-white shadow-sm' : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'}`}
            >
              {type === 'All' ? 'All Resources' : type}
            </button>
          ))}
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPubs.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rlhp-orange bg-orange-100 px-2.5 py-0.5 rounded-full">
                    {item.type}
                  </span>
                  <span className="text-xs font-medium text-gray-400">{item.year}</span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-rlhp-lightgreen text-rlhp-green flex items-center justify-center shrink-0 mt-0.5">
                    {item.type === 'IEP Video' ? <Video size={20} /> : <FileText size={20} />}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-gray-900 leading-snug">{item.title}</h3>
                    <p className="text-[11px] text-gray-500 mt-1">{item.format} • {item.size}</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleDownload(item)}
                disabled={downloadingId === item.id}
                className="w-full bg-rlhp-green hover:bg-rlhp-darkgreen text-white font-bold text-xs py-2.5 rounded-xl shadow-xs transition-colors flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-75"
              >
                {downloadingId === item.id ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    <span>Generating PDF...</span>
                  </>
                ) : item.type === 'IEP Video' ? (
                  <>
                    <Video size={14} />
                    <span>Watch Video Module</span>
                  </>
                ) : (
                  <>
                    <Download size={14} />
                    <span>Download Document</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { BsDownload, BsZoomIn, BsZoomOut, BsFullscreen } from 'react-icons/bs';
import { MdChevronLeft, MdChevronRight, MdClose } from 'react-icons/md';
import { FiImage, FiShare2 } from 'react-icons/fi';

const CataloguePage = () => {
  const [selectedCatalogue, setSelectedCatalogue] = useState('catalogue1');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(100);
  const imagesPerPage = 12;

  const catalogues = {
    catalogue1: {
      name: '1×1.5 BARKAT ENTERPRISE',
      images: Array.from({ length: 29 }, (_, i) => `/assets/Catalogue/1X1.5 BARKAT ENTERPRISE/${i + 1}.webp`),
      pdfPath: '/assets/Catalogue/1X1.5 BARKAT ENTERPRISE (ALL)_compressed.pdf'
    },
    catalogue2: {
      name: '2×2 BARKAT ENTERPRISE',
      images: Array.from({ length: 15 }, (_, i) => `/assets/Catalogue/2X2 BARKAT ENTERPRISE/${i + 1}.webp`),
      pdfPath: '/assets/Catalogue/2X2 BARKAT ENTERPRISE.pdf'
    },
    catalogue3: {
      name: '2×4 BARKAT ENTERPRISE',
      images: Array.from({ length: 36 }, (_, i) => `/assets/Catalogue/2X4 BARKAT ENTERPRISE/${i + 1}.webp`),
      pdfPath: '/assets/Catalogue/2X4 BARKAT ENTERPRISE (GLOSSY).pdf'
    }
  };

  const totalPages = Math.ceil(catalogues[selectedCatalogue].images.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = catalogues[selectedCatalogue].images.slice(startIndex, endIndex);

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedIndex(null);
    setZoomLevel(100);
  };

  const navigateImage = (direction) => {
    const newIndex = selectedIndex + direction;
    if (newIndex >= 0 && newIndex < currentImages.length) {
      setSelectedImage(currentImages[newIndex]);
      setSelectedIndex(newIndex);
    }
  };

  const handleZoom = (action) => {
    setZoomLevel(prev => {
      if (action === 'in' && prev < 200) return prev + 20;
      if (action === 'out' && prev > 60) return prev - 20;
      return prev;
    });
  };

  const shareImage = () => {
    // Implement sharing functionality
    console.log('Sharing image:', selectedImage);
  };

  const downloadCatalogue = () => {
    const pdfPath = catalogues[selectedCatalogue].pdfPath;
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = `${catalogues[selectedCatalogue].name}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <div className="sticky top-0 z-10 bg-white border-b border-bg/20">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Catalogue Selector */}
          <div className="flex flex-wrap space-x-2 md:space-x-4">
            {Object.entries(catalogues).map(([key, { name }]) => (
              <button
                key={key}
                onClick={() => {
                  setSelectedCatalogue(key);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  selectedCatalogue === key 
                    ? 'bg-bgVariant text-primary' 
                    : 'text-primaryVariant hover:bg-bgVariant/50'
                }`}
              >
                {name}
              </button>
            ))}
          </div>

          {/* Download Button */}
          <button 
            onClick={downloadCatalogue}
            className="flex items-center gap-2 px-4 py-2 text-white transition-colors rounded-md bg-primary hover:bg-primaryVariant"
          >
            <BsDownload className="text-lg" />
            <span>Download PDF</span>
          </button>
        </div>
      </div>

      {/* Image Grid */}
      <div className="p-4 md:p-6">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
          {currentImages.map((image, index) => (
            <div 
              key={index}
              className="relative overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-md group hover:shadow-xl"
            >
              <div className="w-full">
                {image ? (
                  <img
                    src={image}
                    alt={`${catalogues[selectedCatalogue].name} - Image ${startIndex + index + 1}`}
                    className="w-full transition-transform duration-300 max-h-[20rem] md:max-h-[23rem] group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full bg-bg/20">
                    <FiImage className="w-12 h-12 text-primaryVariant/50" />
                  </div>
                )}
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 opacity-0 bg-primary/80 group-hover:opacity-100">
                <BsZoomIn className="w-8 h-8 mb-2 text-white" />
                <button 
                  onClick={() => {
                    setSelectedImage(image);
                    setSelectedIndex(index);
                  }}
                  className="px-4 py-2 text-sm font-medium transition-colors bg-white rounded-md text-primary hover:bg-gray-100"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="sticky bottom-0 flex items-center justify-center w-full gap-4 py-4 bg-white border-t border-bg/20">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
              currentPage === 1 
                ? 'bg-bg/20 text-primaryVariant cursor-not-allowed' 
                : 'bg-bgVariant text-primary hover:bg-bgVariant/80'
            }`}
          >
            <MdChevronLeft className="text-xl" />
            <span>Previous</span>
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentPage === page
                    ? 'bg-bgVariant text-primary'
                    : 'text-primaryVariant hover:bg-bgVariant/50'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
              currentPage === totalPages 
                ? 'bg-bg/20 text-primaryVariant cursor-not-allowed' 
                : 'bg-bgVariant text-primary hover:bg-bgVariant/80'
            }`}
          >
            <span>Next</span>
            <MdChevronRight className="text-xl" />
          </button>
        </div>
      )}

      {/* Enhanced Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-full p-4 mx-4 bg-white rounded-lg"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Controls - Top */}
            <div className="absolute left-0 right-0 flex items-center justify-between px-4 py-2 -top-12">
              {/* Image Counter */}
              <span className="text-white">
                Image {selectedIndex + 1} of {currentImages.length}
              </span>
              
              {/* Top Right Controls */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={shareImage}
                  className="p-2 text-white transition-colors rounded-full hover:bg-white/20"
                >
                  <FiShare2 className="w-5 h-5" />
                </button>
                <button
                  onClick={closeModal}
                  className="p-2 text-white transition-colors rounded-full hover:bg-white/20"
                >
                  <MdClose className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Image Container */}
            <div className="relative overflow-hidden">
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="max-h-[70vh] w-auto rounded-lg transition-transform duration-200"
                style={{ transform: `scale(${zoomLevel / 100})` }}
              />
              
              {/* Navigation Arrows */}
              {selectedIndex > 0 && (
                <button
                  onClick={() => navigateImage(-1)}
                  className="absolute p-2 transform -translate-y-1/2 bg-white rounded-full shadow-lg left-4 top-1/2 hover:bg-gray-100"
                >
                  <MdChevronLeft className="w-6 h-6" />
                </button>
              )}
              {selectedIndex < currentImages.length - 1 && (
                <button
                  onClick={() => navigateImage(1)}
                  className="absolute p-2 transform -translate-y-1/2 bg-white rounded-full shadow-lg right-4 top-1/2 hover:bg-gray-100"
                >
                  <MdChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Bottom Controls */}
            <div className="absolute left-0 right-0 flex items-center justify-center gap-4 px-4 py-2 -bottom-12">
              <button
                onClick={() => handleZoom('out')}
                className="p-2 text-white transition-colors rounded-full hover:bg-white/20"
                disabled={zoomLevel <= 60}
              >
                <BsZoomOut className="w-5 h-5" />
              </button>
              <span className="text-white">{zoomLevel}%</span>
              <button
                onClick={() => handleZoom('in')}
                className="p-2 text-white transition-colors rounded-full hover:bg-white/20"
                disabled={zoomLevel >= 200}
              >
                <BsZoomIn className="w-5 h-5" />
              </button>
              <button
                onClick={() => setZoomLevel(100)}
                className="p-2 text-white transition-colors rounded-full hover:bg-white/20"
              >
                <BsFullscreen className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CataloguePage;

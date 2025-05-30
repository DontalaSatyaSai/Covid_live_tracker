import React from 'react';
import { Shield, Heart, Facebook, Twitter, Instagram, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#1A5276] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield size={24} />
              <h3 className="text-xl font-bold">COVID-19 Action Hub</h3>
            </div>
            <p className="mb-4">
              Your trusted source for accurate information and resources during 
              the 2025 COVID-19 spike in India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#F1C40F] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-[#F1C40F] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-[#F1C40F] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-[#F1C40F] transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#dashboard" className="hover:text-[#F1C40F] transition-colors">Live Tracker</a></li>
              <li><a href="#precautions" className="hover:text-[#F1C40F] transition-colors">Precautions</a></li>
              <li><a href="#risk" className="hover:text-[#F1C40F] transition-colors">Risk Analyzer</a></li>
              <li><a href="#treatments" className="hover:text-[#F1C40F] transition-colors">Treatments</a></li>
              <li><a href="#factors" className="hover:text-[#F1C40F] transition-colors">Driving Factors</a></li>
              <li><a href="#recommendations" className="hover:text-[#F1C40F] transition-colors">Your Action Plan</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Official Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center gap-1 hover:text-[#F1C40F] transition-colors">
                  <span>Ministry of Health & Family Welfare</span>
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-1 hover:text-[#F1C40F] transition-colors">
                  <span>World Health Organization</span>
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-1 hover:text-[#F1C40F] transition-colors">
                  <span>Indian Council of Medical Research</span>
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-1 hover:text-[#F1C40F] transition-colors">
                  <span>CDC COVID-19 Resources</span>
                  <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="flex items-center justify-center gap-1">
            <span>&copy; {currentYear} COVID-19 Action Hub. All rights reserved.</span>
            <span className="mx-2">|</span>
            <span className="flex items-center">
              Made with <Heart size={14} className="mx-1 text-red-400" /> for public health
            </span>
          </p>
          <p className="mt-2 text-sm text-white/70">
            This website is for informational purposes. Always consult healthcare professionals for medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
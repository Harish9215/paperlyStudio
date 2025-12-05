import React from 'react';

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  challenge: string;
  solution: string;
  galleryImages: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

export interface DesignConcept {
  conceptName: string;
  visualStyle: string;
  materials: string;
  unboxingExperience: string;
}
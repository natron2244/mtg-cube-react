
export interface Cude {
  name: string;
  description: string;
  cards?: Card[];
  archetypes?: Archetype[];
  ratings?: Rating[];
  label?: Label[];
}

export interface Card {
  id: string,
  name: string,
  imageUris: ImageUris;
  archetypes?: ArchetypeRating[];
  labels?: Label[];
}

export interface ArchetypeRating {
  archetypeId: string;
  archetypeName: string;
  rating: Rating;
}

export interface Archetype {
  id: string,
  name: string,
  description: string,
}

export interface Rating {
  id: string;
  label: string;
  value: number
}

export interface Label {
  id: string,
  label: "Payoff"
}

export interface ImageUris {
  small: string;
  normal: string;
  large: string;
  png: string;
  artCrop: string;
  borderCrop: string;
  
}
export interface SpeakerInterface {
  gender: string;
  name: { title: string; first: string; last: string };
  location: {
    street: { number: number; name: string };
    city: string;
    state: string;
    country: string;
    postcode: string;
    coordinates: { latitude: string; longitude: string };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: { date: string; age: number };
  registered: { date: string; age: number };
  phone: string;
  cell: string;
  id: { name: string; value: string };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

export interface SpeakersInfoInterface {
  seed: string;
  results: number;
  page: number;
  version: string;
}

export interface SpeakersRequestInterface {
  page: number;
}

export interface SpeakersResponseInterface {
  results: SpeakerInterface[];
  info: SpeakersInfoInterface;
}

export interface SpeakersErrorInterface {
  error: string;
}

export interface SpeakersStateInterface {
  isLoading: boolean;
  speakers: SpeakerInterface[];
  info: SpeakersInfoInterface | null;
  error: string | null;
  selectedSpeaker: SpeakerInterface | null;
}

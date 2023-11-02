type Picture = {
  large: string;
  medium: string;
  thumbnail: string;
};

export interface Candidate {
  id: string;
  name: {
    first: string;
    last: string;
  };
  country: string;
  picture: Picture;
}

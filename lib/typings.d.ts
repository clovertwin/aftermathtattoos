export interface ImageSrc {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

export interface ImageType {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  image: ImageSrc;
  name: string;
}

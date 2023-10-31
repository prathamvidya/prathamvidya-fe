import {
  AboutUsDocumentData,
  GalleryDocumentData,
  NoticeDocumentData,
  SettingsDocumentData,
  Simplify,
} from '../../../prismicio-types';

export interface PrismicDataPayloadType {
  settings: Simplify<SettingsDocumentData>;
  notices: Simplify<NoticeDocumentData>[];
  aboutUs: Simplify<AboutUsDocumentData>;
  gallery: Simplify<GalleryDocumentData>;
}

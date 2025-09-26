export interface CardProps {
    title: string;
    content: string;
}

export interface NewPostData {
  title: string;
  content: string;
}
export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: NewPostData) => void;
}

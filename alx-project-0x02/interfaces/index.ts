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

export interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  children: React.ReactNode;
  onClick?: () => void;
}

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}


export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
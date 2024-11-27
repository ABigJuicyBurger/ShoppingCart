export type ProductProps = {
    name: string;
    skills: string[];
    price: number;
    description: string;
    avatarUrl?: string; // ? means optional
    preview?: boolean
}
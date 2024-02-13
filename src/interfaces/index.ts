export interface INews {
    author: string;
    category: CategoryType[];
    description: string;
    id: string;
    image: string;
    language: string;
    published: string;
    title?: string;
    url: string;
}

export interface IFilters {
    page_number: number;
    page_size: number;
    category: CategoryType | null | string;
    keywords: string;
}

export type ParamsType = Partial<IFilters>;

export interface NewsApiResponse {
    news: INews[];
    page: number;
    status: string;
}

export interface CategoriesApiResponse {
    categories: CategoryType[];
    description: string;
    status: string;
}

export type CategoryType =
    | "regional"
    | "technology"
    | "lifestyle"
    | "business"
    | "general"
    | "programming"
    | "science"
    | "entertainment"
    | "world"
    | "sports"
    | "finance"
    | "academia"
    | "politics"
    | "health"
    | "opinion"
    | "food"
    | "game"
    | "fashion"
    | "academic"
    | "crap"
    | "travel"
    | "culture"
    | "economy"
    | "environment"
    | "art"
    | "music"
    | "notsure"
    | "CS"
    | "education"
    | "redundant"
    | "television"
    | "commodity"
    | "movie"
    | "entrepreneur"
    | "review"
    | "auto"
    | "energy"
    | "celebrity"
    | "medical"
    | "gadgets"
    | "design"
    | "EE"
    | "security"
    | "mobile"
    | "estate"
    | "funny";

export type SkeletonType = 'banner' | 'item';
export type DirectionType = 'row' | 'column';
export interface IPaginationProps {
    totalPages: number;
    handlePreviewsPage: () => void;
    handleNextPage: () => void;
    handleClickPage: (page: number) => void;
    currentPage: number;
}

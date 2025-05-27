export type User = {
name: string;
avatarUrl: string;
isPro: boolean;
}

export type ReviewMock = {
id: string;
date: string;
user: User[];
comment: string;
rating: number;
};

declare class CreatePostDto {
    title: string;
    content: string;
}
export declare class PostsController {
    index(): {
        id: number;
    }[];
    create(body: CreatePostDto): CreatePostDto;
    detail(id: string): {
        id: string;
        title: string;
    };
    update(id: string, body: CreatePostDto): CreatePostDto;
    remove(id: string): {
        success: boolean;
    };
}
export {};

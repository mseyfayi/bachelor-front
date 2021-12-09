// todo fix this
export type Tag = string;

export interface User {
  id: string;
  githubId: string;
  beheshtiId: string;
  firstName: string;
  lastName: string;
  avatar: string;
}

interface Comment {
  user: User;
  context: string;
}

interface BlogFile {
  name: string;
  size: string;
  url: string;
}

export interface SimpleBlog {
  id: string;
  title: string;
  tags: Array<Tag>;
  author: Partial<User>;
  readme: string;
  likesCount: number;
  comments: Array<Comment>;
  files: Array<BlogFile>;
}

export interface GitBlog extends SimpleBlog {
  repoTitle: string;
  description: string;
  starsCount: number;
  forksCount: number;
}

export type Blog = GitBlog | SimpleBlog;

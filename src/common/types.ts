import type { NextPage } from 'next/types';
import React from 'react';

export interface Tag {
  id: string;
  name: string;
  color: string;
}

export interface Category {
  id: string;
  title: string;
  tags: Array<Tag>;
}

export interface User {
  id: string;
  githubId?: string;
  beheshtiEmail?: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
}

export interface Comment {
  id: string;
  author: User;
  content: string;
}

interface PostFile {
  name: string;
  size: string;
  id: string;
}

export interface SimplePost {
  id: string;
  tags: Array<Tag> | Array<Tag['id']>;
  author: Partial<User>;
  content: string;
  likesCount: number;
  isLiked: boolean;
  commentsCount?: number;
  comments?: Array<Comment>;
  file?: PostFile;
}

export interface GitPost extends SimplePost {
  repoUrl: string;
  repoTitle: string;
  repoDescription: string;
  image: string;
  'image:alt': string;
  stars: string;
  forks: string;
}

export type Post = GitPost | SimplePost;

export interface OpenGraph {
  image: string;
  'image:alt': string;
  title: `${string}/${string}`;
  url: string;
  description: string;
}

export type INextPage<P = unknown, IP = P, D extends Record<string, unknown> = Record<string, unknown>> = NextPage<P, IP> & {
  Layout?: React.FC<D>;
};
export const isGitPost = (post: Post): post is GitPost => (post as GitPost).repoUrl !== undefined;

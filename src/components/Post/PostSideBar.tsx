import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { getUsername } from 'common/utils';
import { isGitPost, Post, Tag } from 'common/types';
import StarIcon from '@mui/icons-material/Star';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import { Like, TagItem } from 'common/components';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

type Props = {
  post: Post;
  likeMutation: { mutate: () => void; isLoading: boolean };
};

const PostSideBar = ({ post, likeMutation }: Props) => (
  <Box sx={{ color: '#555', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <Box>
      <Box
        sx={{
          mx: 1,
          mb: 3,
          p: 1,
          border: 1,
          borderRadius: 1,
          borderColor: '#ccc',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Avatar src={post.author?.avatar} alt={getUsername(post.author)} sx={{ width: 50, height: 50 }} />
        <Typography sx={{ mx: 1, mb: '0 !important' }}>{getUsername(post.author)}</Typography>
      </Box>
      {isGitPost(post) && (
        <Box
          sx={{
            mx: 1,
            my: 3,
            p: 1,
            border: 1,
            borderRadius: 1,
            borderColor: '#ccc',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography m={1} textAlign="center" fontSize={14}>
            {post.repoTitle}
          </Typography>
          <Typography m={1} textAlign="center" fontSize={13}>
            {post.repoDescription}
          </Typography>
          <Box
            sx={{
              width: 1,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <StarIcon />
              <Typography fontSize={13}>{post.stars}</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <ForkRightIcon />
              <Typography fontSize={13}>{post.forks}</Typography>
            </Box>
          </Box>
        </Box>
      )}
      {post.tags?.length > 0 && (
        <Box
          sx={{
            mx: 1,
            my: 3,
            p: 1,
            border: 1,
            borderRadius: 1,
            borderColor: '#ccc',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          {(post.tags as Array<Tag>).map((tag) => (
            <TagItem key={tag?.id} tag={tag} />
          ))}
        </Box>
      )}
    </Box>
    <Box
      sx={{
        mx: 1,
        my: 3,
        p: 1,
        border: 1,
        borderRadius: 1,
        borderColor: '#ccc',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Like isLiked={post.isLiked} isLoading={likeMutation.isLoading} likePost={likeMutation.mutate} fontSize="small" />
        <Typography fontSize={13}>{post.likes}</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <ChatBubbleOutlineIcon fontSize="small" />
        <Typography mr={1} fontSize={13}>
          {post.comments?.length}
        </Typography>
      </Box>
    </Box>
  </Box>
);

export default PostSideBar;

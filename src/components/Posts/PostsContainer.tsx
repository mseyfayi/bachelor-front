import { fetchApi, getGetConfig } from 'common/utils';
import { getTimelineUrl } from 'common/path';
import { useState } from 'react';
import { useIQuery } from 'common/reactQuery';
import { Post, Tag } from 'common/types';
import PostsPresentation from './PostsPresentation';

const PostsContainer = () => {
  const [filters, setFilters] = useState<Array<Tag>>([]);
  // todo should be infinite loop
  const { data: list, isLoading } = useIQuery<Array<Post> | undefined>(
    ['timeline', filters],
    () =>
      true
        ? [
            {
              id: 'id1',
              title: 'title1',
              tags: [
                { id: 'tag1', name: 'tagsds', color: '#145231' },
                { id: 'tag2', name: 'fghg', color: '#6445F3' },
                { id: 'tag3', name: 'asdasd', color: '#234264' },
              ],
              author: { id: 'user1.id', githubId: 'githubId1' },
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              likesCount: 100,
              isLiked: true,
              comments: [{ id: 'cmn1', user: { id: 'user2.id' }, content: 'context1' }],
            },
            {
              id: 'id2',
              title: 'title2',
              tags: [
                { id: 'tag1', name: 'tagsds', color: '#145231' },
                { id: 'tag2', name: 'fghg', color: '#6445F3' },
                { id: 'tag3', name: 'asdasd', color: '#234264' },
                { id: 'tag3', name: 'asdasd', color: '#234264' },
                { id: 'tag3', name: 'asdasd', color: '#234264' },
                { id: 'tag3', name: 'asdasd', color: '#234264' },
                { id: 'tag3', name: 'asdasd', color: '#234264' },
                { id: 'tag3', name: 'asdasd', color: '#234264' },
                { id: 'tag3', name: 'asdasd', color: '#234264' },
              ],
              author: { id: 'user3.id', githubId: 'githubId3' },
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              likesCount: 102,
              isLiked: false,
              comments: [
                { id: 'cmn1', user: { id: 'user2.id' }, content: 'context1' },
                { id: 'cmn1', user: { id: 'user3.id' }, content: 'context2' },
              ],
              files: [{ name: 'koft', size: '10KB', url: 'https://koft.ir/dard.txt' }],
            },
            {
              id: 'id2',
              title: 'title2',
              tags: [
                { id: 'tag1', name: 'tagsds', color: '#145231' },
                { id: 'tag2', name: 'fghg', color: '#6445F3' },
                { id: 'tag3', name: 'asdasd', color: '#234264' },
              ],
              author: { id: 'user3.id', githubId: 'githubId3' },
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              likesCount: 102,
              isLiked: false,
              comments: [
                { id: 'cmn1', user: { id: 'user2.id' }, content: 'context1' },
                { id: 'cmn1', user: { id: 'user3.id' }, content: 'context2' },
                { id: 'cmn1', user: { id: 'user4.id' }, content: 'context4' },
              ],
              repoUrl: 'https://github.com/madsams/InternetEngineeringReactForm',
              repoDescription: 'string',
              repoTitle: 'github title1',
              description: 'string',
              repoPicture:
                'https://opengraph.githubassets.com/a860f2704646c008be88ea3f87a74781bb1dbdb81542ea903c17ec42439e26b1/madsams/InternetEngineeringReactForm',
              starsCount: 10,
              forksCount: 100,
            },
          ]
        : fetchApi<Array<Post>>(getTimelineUrl(filters), getGetConfig()),
    'خطایی در هنگام گرفتن لیست رخ داده است',
  );
  return <PostsPresentation {...{ filters, setFilters, list, isLoading }} />;
};

export default PostsContainer;

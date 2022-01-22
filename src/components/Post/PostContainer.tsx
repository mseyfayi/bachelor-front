import { Post } from 'common/types';
import { useIMutation, useIQuery } from 'common/reactQuery';
import { fetchApi, getGetConfig, getPostConfig } from 'common/utils';
import { getGetPostDetailUrl, getLikePostUrl, getUnlikePostUrl } from 'common/path';
import PostPresentation from './PostPresentation';

type Props = {
  postId: string;
};

const PostContainer = ({ postId }: Props) => {
  const { data: post, isLoading } = useIQuery<Post | undefined>(['post', postId], () =>
    true
      ? {
          id: 'id1',
          tags: [
            { id: 'tag1', name: 'امبدد', color: '#421321' },
            { id: 'tag3', name: 'عطار', color: '#42fa11' },
            { id: 'tag3', name: 'بی ناموسه', color: '#3287aa' },
          ],
          author: { id: 'u1', firstName: 'علی', lastName: 'علوی' },
          content:
            '# KoolePoshti-BackEnd\n' +
            '\n' +
            '\n' +
            '## Useful Help\n' +
            '\n' +
            '### Flask & Python\n' +
            '`virtualenv venv`\n' +
            '`source ./venv/bin/activate`\n' +
            '`deactivate`\n' +
            '`pip3 install -r requirements.txt`\n' +
            '`python3 ./app.py`\n' +
            '\n' +
            '### Common commands needed for mongodb\n' +
            '\n' +
            '#### Install on WSL\n' +
            '`sudo apt install mongodb`\n' +
            '`sudo service mongodb start`\n' +
            '\n' +
            '#### Working w/ mongo itself\n' +
            '\n' +
            '`sudo mongo`\n' +
            '\n' +
            '```\n' +
            'show dbs\n' +
            'use <db_name>\n' +
            'show collections\n' +
            'db.<collection>.find(<optional_condition>)\n' +
            '```\n' +
            '\n' +
            '### Common needed commands\n' +
            '\n' +
            '#### Set python3 priorities\n' +
            '\n' +
            '```\n' +
            'sudo update-alternatives --install /usr/bin/python3 python /usr/bin/python3.7 2\n' +
            'sudo update-alternatives --install /usr/bin/python3 python /usr/bin/python3.6 1\n' +
            'sudo update-alternatives --install /usr/bin/python3 python /usr/bin/python3.8 3\n' +
            '\n' +
            'sudo update-alternatives --config python\n' +
            '```\n' +
            "> I'm using Python3.6 i guess\n" +
            '\n' +
            '#### Kill open listening Ports on Windows\n' +
            '\n' +
            '`netstat -a -n -o | findstr 5000`\n' +
            '\n' +
            '`kill {PID}`\n' +
            '\n' +
            '### Gmail SMTP \n' +
            '\n' +
            '[How to Authenticate with gmail smtp server](https://support.google.com/accounts/answer/185833?p=InvalidSecondFactor&visit_id=637782802776271348-3112394180&rd=1)\n' +
            '\n' +
            '[Gmail apps password](myaccount.google.com/apppasswords)\n',
          likesCount: 20,
          isLiked: true,
          commentsCount: 12,
          comments: [],
          repoUrl: 'https://github.com/vercel/next.js',
          repoPicture: 'https://repository-images.githubusercontent.com/70107786/6532af00-82ea-11ea-9d1a-7fcded8ac5d3',
          repoDescription: 'The React Framework. Contribute to vercel/next.js development by creating an account on GitHub.',
          repoTitle: 'vercel/next.js: The React Framework',
          starsCount: '79.1K',
          forksCount: '16.1K',
        }
      : fetchApi(getGetPostDetailUrl(postId), getGetConfig()),
  );

  const likeMutation = useIMutation(() =>
    fetchApi(post?.isLiked ? getUnlikePostUrl(postId) : getLikePostUrl(postId), getPostConfig()),
  );

  return <PostPresentation post={post} isLoading={isLoading} likeMutation={likeMutation} />;
};

export default PostContainer;

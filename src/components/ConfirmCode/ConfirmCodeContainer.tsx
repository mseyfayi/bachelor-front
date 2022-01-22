import ConfirmCodePresentation from './ConfirmCodePresentation';

type Props = {
  email: string;
};

const ConfirmCodeContainer = ({ email }: Props) => <ConfirmCodePresentation email={email} />;

export default ConfirmCodeContainer;

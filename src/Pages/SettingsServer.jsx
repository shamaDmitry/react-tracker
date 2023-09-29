import Button from '../Components/atoms/Button';
import Input from '../Components/atoms/Input';
import Header from '../Components/blocks/Header';

const SettingsServer = () => {
  return (
    <div className="h-full w-full SettingsServer max-w-[340px] bg-secondary-100">
      <Header title="Settings" subtitle="Change server" linkTo="/settings" />

      <div className="py-4 px-[17px]">
        <Input placeholder="Server" />

        <Button className="w-full mb-2">Save config</Button>

        <Button type="outline" className="w-full mb-2">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default SettingsServer;

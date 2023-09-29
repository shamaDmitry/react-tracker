import Header from '../Components/blocks/Header';

const SettingsLang = () => {
  return (
    <div className="h-full SettingsLang max-w-[340px] bg-secondary-100">
      <Header title="Settings" subtitle="Change Language" linkTo="/settings" />

      <div className="py-3 px-[17px]">
        <p className="mb-4">Select language</p>

        <select name="" id="" className="w-full px-4 py-2 bg-white border">
          <option value="1">2</option>
          <option value="1">2</option>
          <option value="1">2</option>
        </select>
      </div>
    </div>
  );
};

export default SettingsLang;

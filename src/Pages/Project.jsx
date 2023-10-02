import { useParams } from 'react-router-dom';
import Header from '../Components/blocks/Header';
import ImagePlaceholder from '../assets/icons/imagePlaceholder.svg?react';
import Footer from '../Components/blocks/Footer';
import { useState } from 'react';
import Modal from '../Components/blocks/Modal';
import Button from '../Components/atoms/Button';
import Timer from '../Components/blocks/Timer';
import useProjectsStore from '../store/projectsStore';
import InlineEdit from '../Components/blocks/InlineEdit';

const Project = () => {
  const [getProject] = useProjectsStore(store => [store.getProject]);
  const params = useParams();
  const [memo, setMemo] = useState('');
  const [data, setData] = useState(() => getProject(params.id));
  const [isShown, setIsShown] = useState(false);
  console.log('memo', memo);

  return (
    <>
      {isShown && (
        <Modal setIsShown={setIsShown} className="min-h-[142px]">
          <div className="text-center">
            <p className="mb-5 text-lg text-dark-300">
              Finish the project now?
            </p>

            <div className="flex justify-center px-10 gap-x-3">
              <Button size="large" className="w-full">
                No
              </Button>

              <Button size="large" type="outline" className="w-full">
                Yes
              </Button>
            </div>
          </div>
        </Modal>
      )}

      <div className="outline flex flex-col self-center flex-1 w-full PROJECT max-w-[340px]">
        <Header
          title={data.title}
          subtitle={data.client}
          linkTo="/list"
          handleBack={() => console.log('handleBack')}
        />

        <div className="p-4">
          <p className="mb-4 text-lg text-center text-dark-400">
            Tuesday 06, April
          </p>

          <Timer initTime={data.workedTime} />

          <div className="mb-3">
            <InlineEdit value={memo} setValue={setMemo} />
          </div>

          <div className="flex justify-between mb-3">
            <div className="flex flex-col text-sm text-dark-300">
              <span className="font-bold">Latest screen capture:</span>
              <span className="text-dark-200">2 days ago</span>
            </div>

            <div className="flex flex-col text-sm text-dark-300">
              <span className="font-bold">This week (UTC)</span>
              <span>
                <span className="text-primary-500">08:40</span> of{' '}
                <span className="text-primary-500">30</span> hrs
              </span>
            </div>
          </div>

          <div className="h-[173px] rounded-[15px] bg-secondary-100 border border-secondary-200 mb-3 flex flex-col items-center justify-center">
            <p className="mb-3 text-sm text-secondary-400">No captures yet</p>

            <ImagePlaceholder className="text-secondary-400" />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Project;

import { useParams } from 'react-router-dom';
import Header from '../Components/blocks/Header';
import Play from '../assets/icons/play.svg?react';
import ImagePlaceholder from '../assets/icons/imagePlaceholder.svg?react';
import Footer from '../Components/blocks/Footer';
import { useState } from 'react';
import Modal from '../Components/blocks/Modal';
import Button from '../Components/atoms/Button';

const Project = () => {
  const params = useParams();
  const [isShown, setIsShown] = useState(false);

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
          title="Crowdser"
          subtitle="Client Name"
          linkTo="/list"
          handleBack={() => console.log('handleBack')}
        />

        <div className="p-4">
          <p className="mb-4 text-lg text-center text-dark-400">
            Tuesday 06, April
          </p>

          <div className="mb-3 flex p-4 border border-primary-500 gap-x-8 rounded-[15px] ">
            <div className="flex items-start mr-auto">
              <div className="flex flex-col items-center">
                <span className="text-primary-500 text-[40px] font-bold leading-8 mb-2">
                  08
                </span>
                <span className="text-sm text-dark-300">Hours</span>
              </div>

              <div className="flex flex-col items-center mx-1 mr-2">
                <span className="text-primary-500 text-[40px] font-bold leading-7">
                  :
                </span>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-primary-500 text-[40px] font-bold leading-8 mb-2">
                  40
                </span>
                <span className="text-sm text-dark-300">Minutes</span>
              </div>

              <div className="flex flex-col items-center mx-1 mr-2 opacity-50">
                <span className="text-primary-500 text-[40px] font-bold leading-7">
                  :
                </span>
              </div>

              <div className="flex flex-col items-center opacity-50">
                <span className="text-primary-500 text-[40px] font-bold leading-8 mb-2">
                  18
                </span>
                <span className="text-sm text-dark-300">Seconds</span>
              </div>
            </div>

            <button className="w-[56px] h-[56px] border-primary-500 flex items-center justify-center shrink-0 border rounded-full hover:border-primary-400 hover:text-primary-400 text-primary-500">
              <Play />
            </button>
          </div>

          <div className="py-1 mb-3 border-b border-secondary-200">
            <p>page redesign</p>
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

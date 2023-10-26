import { useParams } from 'react-router-dom';
import Header from '../Components/blocks/Header';
import ImagePlaceholder from '../assets/icons/imagePlaceholder.svg?react';
import Footer from '../Components/blocks/Footer';
import { useEffect, useState } from 'react';
import Modal from '../Components/blocks/Modal';
import Button from '../Components/atoms/Button';
import Timer from '../Components/blocks/Timer';
import InlineEdit from '../Components/blocks/InlineEdit';
import useContractStore from '../store/useContractStore';
import Spinner from '../Components/atoms/Spinner';

const Project = () => {
  const [contract, getContract, setContract] = useContractStore(store => [
    store.contract,
    store.getContract,
    store.setContract,
  ]);

  const params = useParams();
  const [memo, setMemo] = useState('');
  const [isShown, setIsShown] = useState(false);
  useEffect(() => {
    getContract(params.id);
    return () => {};
  }, [getContract, params.id]);
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

      <div className="flex flex-col w-full PROJECT">
        {!contract && (
          <div className='flex items-center justify-center flex-1'>
            <Spinner />
          </div>
        )}

        {contract && (
          <>
            <Header
              title={contract.contractName}
              subtitle={contract.clientName}
              linkTo="/contracts"
              handleBack={() => setContract(null)}
            />

            <div className="flex flex-col flex-1 p-4">
              <p className="mb-4 text-lg text-center text-dark-400">
                Tuesday 06, April
              </p>

              <Timer initTime={contract.workedTime} />

              <div className="mb-3">
                <InlineEdit value={contract.memoText} setValue={setMemo} />
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
                <p className="mb-3 text-sm text-secondary-400">
                  No captures yet
                </p>

                <ImagePlaceholder className="text-secondary-400" />
              </div>

              <Footer className="mt-auto" />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Project;

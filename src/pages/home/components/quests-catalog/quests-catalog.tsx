import React from 'react';

import QuestsList from './components/quests-list/quests-list';
import Tabs from './components/tabs/tabs';
import Spinner from 'src/components/common/spinner/spinner';

import { useAppSelector } from 'src/hooks';
import { selectQuestsStatus } from 'src/store/quests-slice/quests-slice';

import { FetchStatus } from 'src/utils/const';
import { Loader } from 'src/components/common/spinner/spinner.styled';

const QuestsCatalog = () => {
  const questsStatus = useAppSelector(selectQuestsStatus);

  if (questsStatus === FetchStatus.Pending) {
    return (
      <Spinner>
        <Loader />
      </Spinner>
    );
  }

  return (
    <>
      <Tabs />
      <QuestsList />
    </>
  );
};

export default QuestsCatalog;
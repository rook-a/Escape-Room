import { QuestsCatalog } from './components/components';
import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext,
} from '../../components/common/common';
import * as S from './home.styled';
import HomeEmpty from './components/home-empty/home-empty';
import { useAppSelector } from 'src/hooks';
import { selectCurrentQuests } from 'src/store/quests-slice/quests-slice';

const HomePage = () => {
  const quests = useAppSelector(selectCurrentQuests);

  const isEmpty = quests.length === 0;

  return (
    <MainLayout>
      <S.Main forwardedAs="main">
        {isEmpty ? (
          <HomeEmpty />
        ) : (
          <>
            <PageHeading>
              <PageTitle>Выберите тематику</PageTitle>
              <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
            </PageHeading>
            <QuestsCatalog />
          </>
        )}
      </S.Main>
    </MainLayout>
  );
};

export default HomePage;

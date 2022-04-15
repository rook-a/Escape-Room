import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import NotFound from '../not-found/not-found';
import Spinner from 'src/components/common/spinner/spinner';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { BookingModal } from './components/components';
import { MainLayout } from '../../components/common/common';
import {
  fetchQuestAction,
  selectQuest,
  selectQuestStatus,
} from '../../store/quests-slice/quests-slice';
import {
  selectChangePopupСondition,
  changePopupСondition,
} from 'src/store/app-slice/api-slice';

import { genreType, levels } from 'src/utils/utils';
import { FetchStatus } from 'src/utils/const';

import { ReactComponent as IconClock } from '../../assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from '../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../assets/img/icon-puzzle.svg';
import { Loader } from 'src/components/common/spinner/spinner.styled';
import * as S from './detailed-quest.styled';

const DetailedQuest = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const quest = useAppSelector(selectQuest);
  const questStatus = useAppSelector(selectQuestStatus);
  const popupСondition = useAppSelector(selectChangePopupСondition);

  const selectedQuestId = Number(id);

  useEffect(() => {
    dispatch(fetchQuestAction(selectedQuestId));
  }, [dispatch, selectedQuestId]);

  const handleClick = () => {
    dispatch(changePopupСondition(!popupСondition));
  };

  if (questStatus === FetchStatus.Pending) {
    return (
      <Spinner>
        <Loader />
      </Spinner>
    );
  }

  if (questStatus === FetchStatus.Failed) {
    return <NotFound />;
  }

  if (!quest) {
    return null;
  }

  const { coverImg, title, description, type, level, peopleCount, duration } =
    quest;

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`../${coverImg}`}
          alt={`Квест ${title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{title}</S.PageTitle>
            <S.PageSubtitle>{genreType(type)}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{`${duration} мин`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{`${peopleCount[0]}-${peopleCount[1]} чел`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{levels(level)}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>{description}</S.QuestDescription>

            <S.QuestBookingBtn onClick={handleClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {popupСondition && <BookingModal />}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;

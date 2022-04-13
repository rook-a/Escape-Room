import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'src/components/hooks';
import { BookingModal } from './components/components';
import { MainLayout } from '../../common/common';
import {
  fetchQuestAction,
  selectQuest,
} from 'src/components/store/quests-slice/quests-slice';

import { genreType, levels } from 'src/components/utils/utils';

import { ReactComponent as IconClock } from '../../../assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from '../../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../../assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';

const DetailedQuest = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const quest = useAppSelector(selectQuest);
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const selectedQuestId = Number(id);

  useEffect(() => {
    dispatch(fetchQuestAction(selectedQuestId));
  }, [dispatch, selectedQuestId]);

  const handleClick = () => {
    setIsBookingModalOpened(true);
  };

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

        {isBookingModalOpened && <BookingModal />}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;

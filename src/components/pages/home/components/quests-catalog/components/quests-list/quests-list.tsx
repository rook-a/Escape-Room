import React from 'react';

import { selectCurrentQuests } from 'src/components/store/quests-slice/quests-slice';
import { useAppSelector } from 'src/components/hooks';

import { levels } from 'src/components/utils/const';
import { ReactComponent as IconPerson } from '../../../../../../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../../../../../../assets/img/icon-puzzle.svg';
import * as S from './quests-list.styled';

const QuestsList = () => {
  const quests = useAppSelector(selectCurrentQuests);

  return (
    <S.QuestsList>
      {quests.map(({ id, title, previewImg, level, peopleCount }) => (
        <S.QuestItem key={id}>
          <S.QuestItemLink to="/quest">
            <S.Quest>
              <S.QuestImage
                src={previewImg}
                width="344"
                height="232"
                alt="квест Склеп"
              />

              <S.QuestContent>
                <S.QuestTitle>{title}</S.QuestTitle>

                <S.QuestFeatures>
                  <S.QuestFeatureItem>
                    <IconPerson />
                    {`${peopleCount[0]}-${peopleCount[1]} чел`}
                  </S.QuestFeatureItem>
                  <S.QuestFeatureItem>
                    <IconPuzzle />
                    {levels(level)}
                  </S.QuestFeatureItem>
                </S.QuestFeatures>
              </S.QuestContent>
            </S.Quest>
          </S.QuestItemLink>
        </S.QuestItem>
      ))}
    </S.QuestsList>
  );
};

export default QuestsList;

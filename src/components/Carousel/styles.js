import styled from 'styled-components';

// styled responsável pelo título da categoria
export const Title = styled.h3`
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 1;
    margin-bottom: 16px;
    display: inline-block;
    padding: 10px;
    line-height: 1;
    border: 2px solid var(--primaryMedium);
    border-radius: 8px;

    @media (max-width: 800px) {
        font-size: 18px;
        padding: 10px;
        margin-bottom: 10px;
    }
`;

// styled responsável pelo link-focus do vídeo
export const ExtraLink = styled.a`
    margin-left: 16px;
    text-decoration: none;
    transition: opacity .3s;

    &:hover,
    &:focus {
        opacity: .5;
    }

    @media (max-width: 800px) {
        display: block;
        margin-bottom: 16px;
        margin-left: 0;
    }
`;

// provavelmente o styled responsável pela lista de videos das categorias
export const VideoCardList = styled.ul`
    margin: 0;
    padding-left: 0;
    padding-bottom: 32px;
    list-style: none;
    display: flex;
    overflow-x: hidden;
    flex-direction: row;

    li {
        margin-right: 16px;
    }
`;

// styled responsável pelo titulo da categoria
export const VideoCardGroupContainer = styled.section`
    color: white;
    min-height: 197px;
    margin-left: 5%;
    margin-bottom: 16px;
`;

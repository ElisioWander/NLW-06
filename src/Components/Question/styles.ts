import styled from "styled-components";

export const QuestionStyled = styled.div`
    padding: 24px;

    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);

    background-color: var(--gray-50);

    & + .question {
        margin-top: 8px;
    }

    &.highlighted {
    border: 1px solid var(--blue-100);
    background-color: var(--white);

    & footer .user-info span {
        color: var(--gray-800);
        font-weight: 500;
    }
    }

    &.answered {
    background-color: var(--gray-100);
    }


    p {
        color: var(--gray-800);
    }

    footer {
        margin-top: 24px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        .user-info {
            display: flex;
            align-items: center;

            img {
            width: 32px;
            height: 32px;

            border-radius: 50%;
            
            padding: 1px;

            background-color: var(--cyan-500);
            }

            span {
            margin-left: 8px;

            font-size: 14px;
            
            color: var(--gray-800);
            }
        }

        > div {
            display: flex;
            gap: 16px;
        }

        button {
            border: 0;
            cursor: pointer;
            background-color: transparent;

            transition: 0.2s;

            &.like-button {
            display: flex;
            align-items: flex-end;
            gap: 8px;

            color: var(--gray-500);

            &.liked {
                color: var(--blue-100);

                svg path {
                stroke: var(--blue-100);
                }
            }
            }

            &:hover {
            filter: brightness(0.7);
            }
        }
}
`
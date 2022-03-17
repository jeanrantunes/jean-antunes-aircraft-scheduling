import styled from "styled-components"

export const ScrolableList = styled.ul`
    max-height: 100%;
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
`
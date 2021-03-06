import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
`

export const TagContainer = styled.div`
  grid-column: ${(props) => props.col};
  display: flex;
  flex-basis: auto;
  position: relative;
  justify-self: ${(props) => props.justifySelf};
  ${(props) => {
    if (props.position === 'inline')
      return `
        gap: 1rem;
        flex-direction: row;
      `
    if (props.position === 'left')
      return `
        gap: .5rem;
        flex-direction: column;
      `
    if (props.position === 'leftRight')
      return `
        gap: .5rem;
        flex-direction: column;
      `
  }}
`

export const OpenTag = styled.span`
  font-size: 0.85rem;
  color: ${(props) => props.theme.textDark};
  /* padding-right: 1rem; */
  ${(props) => {
    if (props.position === 'inline')
      return `
        align-self: center;
      `
    if (props.position === 'leftRight')
      return `
        align-self: flex-start;
      `
  }}
`
export const CloseTag = styled.span`
  font-size: 0.85rem;
  color: ${(props) => props.theme.textDark};
  /* padding-left: 1rem; */
  ${(props) => {
    if (props.position === 'inline')
      return `
        align-self: center;
      `
    if (props.position === 'leftRight')
      return `
        align-self: flex-end;
        transform: translateX(2rem)
      `
  }}
`
export const Children = styled.div`
  * {
    color: ${(props) => (props.highlight ? props.theme.highlight : '')};
  }
  ${(props) => {
    if (props.position === 'left' || props.position === 'leftRight')
      return `
        padding-left: 2rem;
      `
  }}
`

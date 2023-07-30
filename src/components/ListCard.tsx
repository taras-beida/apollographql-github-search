import { FC, ReactNode } from 'react'

import { styled } from '@mui/material/styles'
import { Paper } from '@mui/material'

const Item = styled(Paper)`
  ${(props) => props.theme.typography.h6}

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 14px;
  color: ${(props) => props.theme.palette.text.secondary};
  height: 60px;
  line-height: 60px;

  & .title {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

interface Props {
  children: ReactNode
  title: string
}

const ListCard: FC<Props> = ({ children, title }) => {
  return (
    <Item elevation={2}>
      <div className="title">{title}</div>
      {children}
    </Item>
  )
}

export default ListCard

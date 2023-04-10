import DashBoardBox from "./DashBoardBox"

type Props = {}

const Row3 = (props: Props) => {
  return (
    <>
      <DashBoardBox bgcolor="#fff" sx={{ gridArea: "g" }}></DashBoardBox>
      <DashBoardBox bgcolor="#fff" sx={{ gridArea: "h" }}></DashBoardBox>
      <DashBoardBox bgcolor="#fff" sx={{ gridArea: "i" }}></DashBoardBox>
      <DashBoardBox bgcolor="#fff" sx={{ gridArea: "j" }}></DashBoardBox>
    </>
  )
}

export default Row3

import DashBoardBox from "@/components/DashboardBox"

type Props = {}

const Row2 = (props: Props) => {
  return (
    <>
      <DashBoardBox bgcolor="#fff" sx={{ gridArea: "d" }}></DashBoardBox>
      <DashBoardBox bgcolor="#fff" sx={{ gridArea: "e" }}></DashBoardBox>
      <DashBoardBox bgcolor="#fff" sx={{ gridArea: "f" }}></DashBoardBox>
    </>
  )
}

export default Row2

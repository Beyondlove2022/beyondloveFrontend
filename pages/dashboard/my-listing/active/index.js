import NavbarThree from '../../../../components/_App/NavbarThree';
import DashboardNavbar from '../../../../components/Dashboard/DashboardNavbar';
import DashboardListingArea from '../../../../components/Dashboard/DashboardListingArea';

const Index = () => {
  return (
    <>
      <DashboardNavbar />
      <div className='main-content d-flex flex-column'>
        <NavbarThree />
        <DashboardListingArea />
      </div>
    </>
  );
};

export default Index;

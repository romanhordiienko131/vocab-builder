export const Logo = () => {
  return (
    <>
      <svg aria-hidden={true} className="tb:hidden block h-9 w-[11.375rem]">
        <use href="/icons/icons.svg#logo-mobile"></use>
      </svg>

      <svg aria-hidden={true} className="tb:block hidden h-10 w-[13.375rem]">
        <use href="/icons/icons.svg#logo-tablet"></use>
      </svg>
    </>
  );
};

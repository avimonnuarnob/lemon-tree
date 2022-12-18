import Header from '../core/Header';

export default function MainLayout(props: any) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  );
}

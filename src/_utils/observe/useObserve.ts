interface ObserveOptions {
  el: Element | null;
  onSizeChanged: (el: Element) => void;
}
function useObserve(options: ObserveOptions) {
  // const { el, onSizeChanged } = options;
  // useEffect(() => {
  //   if (el) {
  //     observe(el, onSizeChanged);
  //   }
  //   return () => {
  //     if (el) {
  //       unobserve(el, onSizeChanged);
  //     }
  //   };
  // }, [el, onSizeChanged]);
}

export default useObserve;

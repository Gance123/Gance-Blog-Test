export const ScrollObserver = (
  ets: string,
  els: string,
  opts: {},
  url?: string
) => {
  const defaultOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
    once: true,
  };
  const entries = document.querySelectorAll(ets);
  const elements = document.querySelectorAll(els);
  const options = Object.assign(defaultOptions, opts);
  const once = options.once;

  const init = () => {
    const callback = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          elements.forEach((element) => {
            element.classList.add("inView");
          });
          entry.target.classList.add("inView");
          if (once) {
            observer.unobserve(entry.target);
          }
        } else {
          elements.forEach((element) => {
            element.classList.remove("inView");
          });
        }
      });
    };
    const io = new IntersectionObserver(callback);
    entries.forEach((entry) => io.observe(entry));
  };

  return { init };
};

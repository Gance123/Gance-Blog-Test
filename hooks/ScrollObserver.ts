export const ScrollObserver = (
  ets: string,
  els: string,
  cls: string,
  opts: {}
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

  const _init = () => {
    const callback = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          elements.forEach((element) => {
            element.classList.add(cls);
          });
          entry.target.classList.add(cls);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else {
          elements.forEach((element) => {
            element.classList.remove(cls);
          });
        }
      });
    };
    const io = new IntersectionObserver(callback);
    entries.forEach((entry) => io.observe(entry));
  };

  _init();
};

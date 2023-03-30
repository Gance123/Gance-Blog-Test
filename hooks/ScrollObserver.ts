export const ScrollObserver = (els: string, opts: {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
    once: true,
  };
  const elements = document.querySelectorAll(els);
  const options = Object.assign(defaultOptions, opts);
  const once = options.once;

  const _init = () => {
    const callback = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("inView");
          console.log(entry.target.classList);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else {
          entry.target.classList.remove("inView");
          console.log(entry.target.classList);
        }
      });
    };
    const io = new IntersectionObserver(callback);
    elements.forEach((element) => io.observe(element));
  };

  _init();
};

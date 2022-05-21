export const animatedList = {
  hidden: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: 1,
      easing: 'easeOut',
    },
  },
  show: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: 1,
      easing: 'easeOut',
    },
    delay: 2,
  },
}

export const animatedListItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

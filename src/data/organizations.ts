/** Brand artwork supplied with the original portfolio. Keep its colors intact. */
export const organizations = {
  firefly: { src: 'firefly.png', name: 'Firefly Aerospace', shape: 'wordmark' },
  spaceRaiders: {
    src: 'space-raiders.png',
    name: 'Space Raiders',
    shape: 'wordmark',
  },
  texasTech: {
    src: 'tech.png',
    name: 'Texas Tech University',
    shape: 'symbol',
  },
  connectEDU: { src: 'cedu.png', name: 'ConnectEDU', shape: 'wordmark' },
} as const;
export type OrganizationKey = keyof typeof organizations;

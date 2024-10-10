declare module "maath/random/dist/maath-random.esm" {
  export function inSphere(
    positions: Float32Array,
    options?: { radius: number }
  ): Float32Array;
  export function inBox(
    positions: Float32Array,
    options?: { size: number }
  ): Float32Array;
  // Add other functions as necessary
}

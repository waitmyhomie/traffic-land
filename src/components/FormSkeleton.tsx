import React from 'react';
import Skeleton from './Skeleton';

const FormSkeleton: React.FC = () => {
  return (
    <section className="relative flex-1 flex items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-black">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-0">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20">
            
            {/* Left column - title skeleton */}
            <div className="w-full lg:w-[45%] xl:w-[42%] 2xl:w-[40%] flex-shrink-0 flex flex-col items-center justify-center lg:items-start lg:justify-start">
              <div className="w-full flex flex-col items-center justify-center lg:items-start lg:justify-start gap-6">
                <Skeleton height="60px" className="w-[280px] sm:w-[320px] lg:w-[400px]" />
                <Skeleton height="80px" className="w-full max-w-[280px] sm:max-w-[400px] lg:max-w-none" />
              </div>
            </div>

            {/* Right column - form skeleton */}
            <div className="w-full lg:w-[50%] xl:w-[55%] 2xl:w-[57%] flex-shrink-0">
              <div className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-none mx-auto space-y-5 sm:space-y-6 lg:space-y-8">
                {/* First row */}
                <div className="flex flex-col sm:flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 xl:gap-8">
                  <div>
                    <Skeleton height="20px" className="w-[150px] mb-3" />
                    <Skeleton height="52px" />
                  </div>
                  <div>
                    <Skeleton height="20px" className="w-[100px] mb-3" />
                    <Skeleton height="52px" />
                  </div>
                </div>

                {/* Comment field */}
                <div>
                  <Skeleton height="20px" className="w-[130px] mb-3" />
                  <Skeleton height="66px" />
                </div>

                {/* Submit button */}
                <Skeleton height="70px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSkeleton;
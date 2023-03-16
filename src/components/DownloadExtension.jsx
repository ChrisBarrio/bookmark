import React from 'react';
import {
  CardDownloadChrome,
  CardDownloadFirefox,
  CardDownloadOpera,
} from './CardDownload';

const DownloadExtension = () => {
  return (
    <section className="my-20 flex flex-col items-center gap-4">
      <h3 className="text-2xl font-bold text-slate-700">
        Download the extension
      </h3>
      <p className="w-1/3 text-slate-400">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>

      <div className="mt-5 flex justify-center gap-8">
        <div>
          <CardDownloadChrome />
        </div>
        <div className="mt-10">
          <CardDownloadFirefox />
        </div>
        <div className="mt-20">
          <CardDownloadOpera />
        </div>
      </div>
    </section>
  );
};

export default DownloadExtension;
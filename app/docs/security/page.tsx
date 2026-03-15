export default function SecurityDocs() {
  return (
    <article className="prose prose-invert max-w-none prose-p:leading-loose prose-headings:tracking-tight">
      <div className="mb-16">
        <div className="mb-4 font-mono text-xs tracking-widest text-gray-400 uppercase">
          [04] Security & Sovereignty
        </div>
        <h1 className="font-serif text-5xl italic md:text-7xl mb-8">
          The Fortress.
        </h1>
        <p className="font-mono text-sm leading-relaxed text-gray-400 uppercase tracking-wider">
          Privacy is not a feature; it is the foundation. We have built a system that we cannot access even if we wanted to.
        </p>
      </div>

      <section className="mb-20">
        <h2 className="font-serif text-3xl italic mb-6">The End-User Perspective (75%)</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="font-sans text-xl font-bold text-white mb-4">No "Forgot Password"</h3>
            <p className="text-gray-400 leading-relaxed">
              In a typical app, you can reset your password because the company stores your data on their servers. <strong className="text-gray-200 font-semibold">Temporal does not store your data.</strong> Your database lives only on your phone. If you lose access and haven't backed up your Recovery Kit, your data is gone forever. This is the price of true sovereignty.
            </p>
          </div>

          <div>
            <h3 className="font-sans text-xl font-bold text-white mb-4">Why you need a Recovery Kit</h3>
            <p className="text-gray-400 leading-relaxed">
              The Recovery Kit is a secure JSON payload containing a "snapshot" of your local configuration. Since everything is offline, this is your only way to move data to a new device. Think of it like a hardware wallet for your finances.
            </p>
          </div>

          <div className="p-8 border border-white bg-white/5">
             <h4 className="font-mono text-xs font-bold tracking-widest mb-4 uppercase text-white">Daily Use-Case: Biometric Entry</h4>
             <p className="text-sm text-gray-400 leading-relaxed italic">
               "I open the app 10 times a day. I don't want to type a PIN." Biometric integration (FaceID/Fingerprint) allows for instant, secure access while keeping the underlying decryption keys protected within the phone's hardware enclave.
             </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="p-8 bg-[#111111] border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-white/30 uppercase">Technical Specs (25%)</div>
          <h2 className="font-serif text-2xl italic mb-6 text-white/90">The Hardware Enclave</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-mono text-xs font-bold text-[#aaaaaa] mb-2 uppercase tracking-tighter">SecureStore Key Management</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                User credentials and recovery hashes are stored using the `expo-secure-store` library, which utilizes iOS Keychain and Android Keystore. This ensures that even if the device is physically compromised, extracting these keys without biometric authentication is cryptographically difficult.
              </p>
            </div>
            <div>
              <h4 className="font-mono text-xs font-bold text-[#aaaaaa] mb-2 uppercase tracking-tighter">Zero-Network Surface Area</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Apart from fetching market NAVs, the app core has a zero-network surface area. No analytics, no session tracking, and no cloud-side transaction processing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

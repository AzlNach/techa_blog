'use client';

import { useEffect } from 'react';

interface Article {
  id: number;
  tag: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  category: string;
  content?: string;
  author?: string;
  publishedDate?: string;
}

interface ArticleModalProps {
  article: Article | null;
  isOpen: boolean;
  onClose: () => void;
}

const ArticleModal = ({ article, isOpen, onClose }: ArticleModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !article) return null;

  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'AI':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'KUANTUM':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'OPEN SOURCE':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'HYBRID CLOUD':
        return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  const getArticleContent = (id: number) => {
    const contents: { [key: number]: string } = {
      1: `
        <div class="prose prose-invert max-w-none">
          <div class="mb-8">
            <p class="text-lg leading-relaxed mb-6">Dalam era digital yang terus berkembang, chatbot telah menjadi tulang punggung layanan pelanggan modern. Vodafone, salah satu operator telekomunikasi terbesar di dunia, menghadapi tantangan besar dalam menangani volume pertanyaan pelanggan yang mencapai jutaan setiap bulannya.</p>
          </div>
          
          <h2 class="text-2xl font-bold text-white mb-4 border-l-4 border-blue-400 pl-4">Tantangan yang Dihadapi</h2>
          <p class="mb-4">Sebelum implementasi watsonx Assistant, Vodafone mengalami:</p>
          <div class="bg-gray-800/50 rounded-lg p-6 mb-6">
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-red-400 mr-3">•</span>
                <div>Waktu tunggu pelanggan yang mencapai rata-rata 8-12 menit</div>
              </li>
              <li class="flex items-start">
                <span class="text-red-400 mr-3">•</span>
                <div>Tingkat kepuasan pelanggan yang menurun karena respons yang lambat</div>
              </li>
              <li class="flex items-start">
                <span class="text-red-400 mr-3">•</span>
                <div>Beban kerja agent yang berlebihan untuk pertanyaan-pertanyaan rutin</div>
              </li>
              <li class="flex items-start">
                <span class="text-red-400 mr-3">•</span>
                <div>Biaya operasional yang terus meningkat</div>
              </li>
            </ul>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 border-l-4 border-blue-400 pl-4">Solusi watsonx Assistant</h2>
          <p class="mb-4">IBM watsonx Assistant diimplementasikan dengan fitur-fitur unggulan:</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div class="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
              <h4 class="text-blue-300 font-semibold mb-2">Natural Language Processing</h4>
              <p class="text-sm text-gray-300">Memahami bahasa natural pelanggan dalam berbagai bahasa</p>
            </div>
            <div class="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
              <h4 class="text-blue-300 font-semibold mb-2">Machine Learning</h4>
              <p class="text-sm text-gray-300">Terus belajar dari setiap interaksi untuk meningkatkan akurasi</p>
            </div>
            <div class="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
              <h4 class="text-blue-300 font-semibold mb-2">Integration API</h4>
              <p class="text-sm text-gray-300">Terintegrasi dengan sistem CRM dan billing Vodafone</p>
            </div>
            <div class="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
              <h4 class="text-blue-300 font-semibold mb-2">Omnichannel Support</h4>
              <p class="text-sm text-gray-300">Tersedia di website, aplikasi mobile, dan WhatsApp</p>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 border-l-4 border-blue-400 pl-4">Hasil Implementasi</h2>
          <p class="mb-4">Dalam 6 bulan pertama implementasi, Vodafone mencatat peningkatan signifikan:</p>
          <div class="bg-green-900/20 rounded-lg p-6 mb-6 border border-green-500/30">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="text-center">
                <div class="text-3xl font-bold text-green-400 mb-2">50%</div>
                <div class="text-sm text-gray-300">Pengurangan waktu tunggu (dari 10 menit menjadi 5 menit)</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-green-400 mb-2">8.9</div>
                <div class="text-sm text-gray-300">Peningkatan customer satisfaction score (dari 7.2)</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-green-400 mb-2">90%</div>
                <div class="text-sm text-gray-300">Pertanyaan rutin diselesaikan tanpa escalation</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-green-400 mb-2">€2.3M</div>
                <div class="text-sm text-gray-300">Penghematan biaya operasional per tahun</div>
              </div>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 border-l-4 border-blue-400 pl-4">Teknologi di Balik Kesuksesan</h2>
          <p class="mb-4">watsonx Assistant menggunakan teknologi AI terdepan:</p>
          <div class="bg-gray-900 rounded-lg p-4 mb-6">
            <pre class="text-sm text-gray-300"><code># Contoh implementasi watsonx Assistant
import ibm_watson
from ibm_watson import AssistantV2

# Initialize Watson Assistant
assistant = AssistantV2(
    version='2023-06-15',
    authenticator=IAMAuthenticator('your-api-key')
)

# Create session
session = assistant.create_session(
    assistant_id='your-assistant-id'
).get_result()

# Send message
response = assistant.message(
    assistant_id='your-assistant-id',
    session_id=session['session_id'],
    input={
        'message_type': 'text',
        'text': 'Saya ingin cek tagihan bulan ini'
    }
).get_result()

print(response['output']['generic'][0]['text'])</code></pre>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 border-l-4 border-blue-400 pl-4">Pelajaran untuk Industri Lain</h2>
          <p class="mb-4">Implementasi ini memberikan insight berharga:</p>
          <div class="bg-gray-800/50 rounded-lg p-6 mb-6">
            <ol class="space-y-3">
              <li class="flex items-start">
                <span class="text-blue-400 mr-3 font-bold">1.</span>
                <div><strong class="text-blue-300">Data Quality</strong> - Pentingnya training data yang berkualitas tinggi</div>
              </li>
              <li class="flex items-start">
                <span class="text-blue-400 mr-3 font-bold">2.</span>
                <div><strong class="text-blue-300">Change Management</strong> - Perlu strategi yang komprehensif untuk adopsi</div>
              </li>
              <li class="flex items-start">
                <span class="text-blue-400 mr-3 font-bold">3.</span>
                <div><strong class="text-blue-300">Continuous Improvement</strong> - Monitoring dan optimasi berkelanjutan</div>
              </li>
              <li class="flex items-start">
                <span class="text-blue-400 mr-3 font-bold">4.</span>
                <div><strong class="text-blue-300">System Integration</strong> - Integrasi dengan existing systems harus seamless</div>
              </li>
            </ol>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 border-l-4 border-blue-400 pl-4">Implementasi untuk Perusahaan Indonesia</h2>
          <p class="mb-4">Perusahaan Indonesia dapat mengadopsi strategi serupa dengan fokus pada:</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div class="bg-blue-900/20 rounded-lg p-4 border border-blue-500/30">
              <h4 class="text-blue-300 font-semibold mb-2">Bahasa Indonesia Support</h4>
              <p class="text-sm text-gray-300">Training model untuk memahami nuansa bahasa dan budaya lokal</p>
            </div>
            <div class="bg-blue-900/20 rounded-lg p-4 border border-blue-500/30">
              <h4 class="text-blue-300 font-semibold mb-2">Local Compliance</h4>
              <p class="text-sm text-gray-300">Mematuhi regulasi perlindungan data personal Indonesia</p>
            </div>
            <div class="bg-blue-900/20 rounded-lg p-4 border border-blue-500/30">
              <h4 class="text-blue-300 font-semibold mb-2">Multi-Channel Integration</h4>
              <p class="text-sm text-gray-300">Integrasi dengan platform populer seperti WhatsApp Business</p>
            </div>
            <div class="bg-blue-900/20 rounded-lg p-4 border border-blue-500/30">
              <h4 class="text-blue-300 font-semibold mb-2">Cost Optimization</h4>
              <p class="text-sm text-gray-300">Strategi implementasi yang cost-effective untuk market Indonesia</p>
            </div>
          </div>
        </div>
      `,
      2: `
        <div class="prose prose-invert max-w-none">
          <div class="mb-8">
            <p class="text-lg leading-relaxed mb-6">Komputasi kuantum merepresentasikan paradigma baru dalam dunia komputasi yang memanfaatkan prinsip-prinsip mekanika kuantum. IBM Qiskit adalah framework open-source yang memungkinkan developer untuk mulai bereksperimen dengan quantum computing dan memahami potensi revolusioner teknologi ini.</p>
          </div>
          
          <h2 class="text-2xl font-bold text-white mb-4 border-l-4 border-purple-400 pl-4">Apa itu Quantum Computing?</h2>
          <p class="mb-4">Tidak seperti bit klasik yang hanya bisa bernilai 0 atau 1, quantum bit (qubit) dapat berada dalam superposisi kedua state sekaligus. Ini memungkinkan quantum computer untuk melakukan kalkulasi paralel yang eksponensial.</p>
          <div class="bg-purple-900/20 rounded-lg p-6 mb-6 border border-purple-500/30">
            <h4 class="text-purple-300 font-semibold mb-4">Perbedaan Fundamental</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-gray-800/50 rounded-lg p-4">
                <h5 class="text-white font-semibold mb-2">Classical Computing</h5>
                <ul class="text-sm text-gray-300 space-y-1">
                  <li>• Bit: 0 atau 1</li>
                  <li>• Sequential processing</li>
                  <li>• Deterministic results</li>
                  <li>• Limited parallelism</li>
                </ul>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-4">
                <h5 class="text-purple-300 font-semibold mb-2">Quantum Computing</h5>
                <ul class="text-sm text-gray-300 space-y-1">
                  <li>• Qubit: 0, 1, atau superposisi</li>
                  <li>• Massive parallel processing</li>
                  <li>• Probabilistic results</li>
                  <li>• Exponential parallelism</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 border-l-4 border-purple-400 pl-4">Instalasi dan Setup Qiskit</h2>
          <p class="mb-4">Mulai dengan menginstall Qiskit di environment Python Anda:</p>
          <div class="bg-gray-900 rounded-lg p-4 mb-6">
            <pre class="text-sm text-gray-300"><code># Install Qiskit dan dependencies
pip install qiskit qiskit-aer matplotlib

# Install tambahan untuk visualisasi
pip install qiskit[visualization]

# Install untuk akses IBM Quantum
pip install qiskit-ibm-runtime</code></pre>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 border-l-4 border-purple-400 pl-4">Sirkuit Kuantum Pertama</h2>
          <p class="mb-4">Mari buat sirkuit sederhana yang membuat superposisi qubit:</p>
          <div class="bg-gray-900 rounded-lg p-4 mb-6">
            <pre class="text-sm text-gray-300"><code>from qiskit import QuantumCircuit, Aer, execute
from qiskit.visualization import plot_histogram
import matplotlib.pyplot as plt

# Membuat quantum circuit dengan 1 qubit dan 1 classical bit
qc = QuantumCircuit(1, 1)

# Aplikasikan Hadamard gate untuk membuat superposisi
qc.h(0)  # Hadamard pada qubit 0

# Mengukur qubit dan simpan hasil di classical bit
qc.measure(0, 0)

# Visualisasi circuit
print("Quantum Circuit:")
print(qc.draw())

"""
Output:
     ┌───┐ ░ ┌─┐
q_0: ┤ H ├─░─┤M├
     └───┘ ░ └╥┘
c_0: ═══════════╩═
"""</code></pre>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 border-l-4 border-purple-400 pl-4">Menjalankan Sirkuit</h2>
          <p class="mb-4">Sekarang jalankan sirkuit pada simulator:</p>
          <div class="bg-gray-900 rounded-lg p-4 mb-6">
            <pre class="text-sm text-gray-300"><code># Menggunakan Aer simulator
backend = Aer.get_backend('qasm_simulator')

# Execute circuit dengan 1000 shots
job = execute(qc, backend, shots=1000)
result = job.result()

# Dapatkan hasil pengukuran
counts = result.get_counts(qc)
print("Measurement results:", counts)

# Expected output: {'0': ~500, '1': ~500}
# Karena superposisi, kita mendapat 50% kemungkinan untuk setiap hasil

# Visualisasi hasil
plot_histogram(counts)
plt.title('Quantum Measurement Results')
plt.show()</code></pre>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 border-l-4 border-purple-400 pl-4">Konsep Penting Quantum Computing</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div class="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
              <h4 class="text-purple-300 font-semibold mb-2">Superposisi</h4>
              <p class="text-sm text-gray-300">Qubit dapat berada dalam kombinasi linear state |0⟩ dan |1⟩ secara bersamaan</p>
            </div>
            <div class="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
              <h4 class="text-purple-300 font-semibold mb-2">Entanglement</h4>
              <p class="text-sm text-gray-300">Qubit dapat saling terhubung secara kuantum, membentuk sistem yang tidak dapat dipisahkan</p>
            </div>
            <div class="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
              <h4 class="text-purple-300 font-semibold mb-2">Quantum Gates</h4>
              <p class="text-sm text-gray-300">Operasi unitary yang dapat dilakukan pada qubit (H, X, Y, Z, CNOT)</p>
            </div>
            <div class="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
              <h4 class="text-purple-300 font-semibold mb-2">Measurement</h4>
              <p class="text-sm text-gray-300">Proses collapse superposisi menjadi state klasik definitif</p>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 border-l-4 border-purple-400 pl-4">Contoh Advanced: Quantum Entanglement</h2>
          <div class="bg-gray-900 rounded-lg p-4 mb-6">
            <pre class="text-sm text-gray-300"><code># Membuat Bell State (entangled qubits)
from qiskit import QuantumCircuit

# Circuit dengan 2 qubit
qc_bell = QuantumCircuit(2, 2)

# Buat superposisi pada qubit pertama
qc_bell.h(0)

# Entangle kedua qubit dengan CNOT gate
qc_bell.cx(0, 1)  # Control: qubit 0, Target: qubit 1

# Measure kedua qubit
qc_bell.measure_all()

print("Bell State Circuit:")
print(qc_bell.draw())

# Jalankan simulasi
backend = Aer.get_backend('qasm_simulator')
job = execute(qc_bell, backend, shots=1000)
result = job.result()
counts = result.get_counts()

print("Bell State Results:", counts)
# Expected: {'00': ~500, '11': ~500}
# Tidak ada '01' atau '10' karena qubit ter-entangled!</code></pre>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 border-l-4 border-purple-400 pl-4">Aplikasi Praktis Quantum Computing</h2>
          <p class="mb-4">Quantum computing memiliki potensi besar dalam berbagai industri:</p>
          <div class="bg-gray-800/50 rounded-lg p-6 mb-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 class="text-purple-300 font-semibold mb-3">Industri Finansial</h4>
                <ul class="text-sm text-gray-300 space-y-2">
                  <li>• Portfolio optimization</li>
                  <li>• Risk analysis dan Monte Carlo simulation</li>
                  <li>• Fraud detection dengan quantum ML</li>
                  <li>• High-frequency trading algorithms</li>
                </ul>
              </div>
              <div>
                <h4 class="text-purple-300 font-semibold mb-3">Farmasi & Healthcare</h4>
                <ul class="text-sm text-gray-300 space-y-2">
                  <li>• Drug discovery dan molecular simulation</li>
                  <li>• Protein folding prediction</li>
                  <li>• Personalized medicine</li>
                  <li>• Genetic analysis</li>
                </ul>
              </div>
              <div>
                <h4 class="text-purple-300 font-semibold mb-3">Cybersecurity</h4>
                <ul class="text-sm text-gray-300 space-y-2">
                  <li>• Quantum cryptography</li>
                  <li>• Post-quantum encryption</li>
                  <li>• Quantum key distribution</li>
                  <li>• Breaking classical encryption</li>
                </ul>
              </div>
              <div>
                <h4 class="text-purple-300 font-semibold mb-3">Supply Chain</h4>
                <ul class="text-sm text-gray-300 space-y-2">
                  <li>• Route optimization</li>
                  <li>• Inventory management</li>
                  <li>• Demand forecasting</li>
                  <li>• Logistics planning</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 border-l-4 border-purple-400 pl-4">Akses IBM Quantum Hardware</h2>
          <div class="bg-gray-900 rounded-lg p-4 mb-6">
            <pre class="text-sm text-gray-300"><code># Setup untuk mengakses real quantum computer
from qiskit_ibm_runtime import QiskitRuntimeService

# Save your IBM Quantum credentials (one time setup)
QiskitRuntimeService.save_account(
    channel="ibm_quantum",
    token="YOUR_IBM_QUANTUM_TOKEN"
)

# Load service
service = QiskitRuntimeService()

# List available backends
backends = service.backends()
print("Available quantum computers:")
for backend in backends:
    print(f"- {backend.name}: {backend.num_qubits} qubits")

# Use real quantum hardware
backend = service.backend("ibmq_manila")  # 5-qubit processor
job = backend.run(qc, shots=100)  # Fewer shots for real hardware

print("Job ID:", job.job_id())
result = job.result()
print("Real quantum computer results:", result.get_counts())</code></pre>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 border-l-4 border-purple-400 pl-4">Roadmap Pembelajaran</h2>
          <p class="mb-4">Untuk memperdalam pemahaman quantum computing:</p>
          <div class="bg-purple-900/20 rounded-lg p-6 mb-6 border border-purple-500/30">
            <ol class="space-y-3">
              <li class="flex items-start">
                <span class="text-purple-400 mr-3 font-bold">1.</span>
                <div><strong class="text-purple-300">Foundation</strong> - Pelajari linear algebra dan quantum mechanics basics</div>
              </li>
              <li class="flex items-start">
                <span class="text-purple-400 mr-3 font-bold">2.</span>
                <div><strong class="text-purple-300">Quantum Gates</strong> - Kuasai semua quantum gates (Pauli-X, Y, Z, Hadamard, CNOT)</div>
              </li>
              <li class="flex items-start">
                <span class="text-purple-400 mr-3 font-bold">3.</span>
                <div><strong class="text-purple-300">Algorithms</strong> - Implementasi Deutsch-Jozsa, Grover's, dan Shor's algorithm</div>
              </li>
              <li class="flex items-start">
                <span class="text-purple-400 mr-3 font-bold">4.</span>
                <div><strong class="text-purple-300">NISQ Era</strong> - Pelajari Variational Quantum Eigensolver (VQE) dan QAOA</div>
              </li>
              <li class="flex items-start">
                <span class="text-purple-400 mr-3 font-bold">5.</span>
                <div><strong class="text-purple-300">Real Hardware</strong> - Eksperimen dengan IBM Quantum Network</div>
              </li>
            </ol>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 border-l-4 border-purple-400 pl-4">Resources untuk Developer Indonesia</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div class="bg-purple-900/20 rounded-lg p-4 border border-purple-500/30">
              <h4 class="text-purple-300 font-semibold mb-2">Qiskit Textbook</h4>
              <p class="text-sm text-gray-300">Comprehensive guide untuk quantum computing fundamentals</p>
            </div>
            <div class="bg-purple-900/20 rounded-lg p-4 border border-purple-500/30">
              <h4 class="text-purple-300 font-semibold mb-2">IBM Quantum Network</h4>
              <p class="text-sm text-gray-300">Akses gratis ke real quantum computers</p>
            </div>
            <div class="bg-purple-900/20 rounded-lg p-4 border border-purple-500/30">
              <h4 class="text-purple-300 font-semibold mb-2">Qiskit Summer School</h4>
              <p class="text-sm text-gray-300">Annual program untuk deepening quantum knowledge</p>
            </div>
            <div class="bg-purple-900/20 rounded-lg p-4 border border-purple-500/30">
              <h4 class="text-purple-300 font-semibold mb-2">Community Indonesia</h4>
              <p class="text-sm text-gray-300">Join Indonesian quantum computing enthusiasts</p>
            </div>
          </div>
        </div>
      `,
      3: `
        <div class="prose prose-invert max-w-none">
          <div class="mb-8">
            <p class="text-lg leading-relaxed mb-6">Dalam landscape AI yang didominasi oleh model proprietary, IBM mengambil pendekatan berbeda dengan meluncurkan Granite - family of foundation models yang sepenuhnya open source. Keputusan ini bukan tanpa alasan strategis yang mendalam.</p>
          </div>
          
          <h2 class="text-2xl font-bold text-white mb-4 border-l-4 border-emerald-400 pl-4">Mengapa Open Source Penting?</h2>
          <p class="mb-4">Model AI proprietary menciptakan vendor lock-in dan ketergantungan yang berbahaya bagi enterprise:</p>
          <div class="bg-gray-800/50 rounded-lg p-6 mb-6">
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-emerald-400 mr-3">•</span>
                <div><strong class="text-emerald-300">Transparansi</strong> - Developer dapat memahami cara kerja model</div>
              </li>
              <li class="flex items-start">
                <span class="text-emerald-400 mr-3">•</span>
                <div><strong class="text-emerald-300">Customization</strong> - Model dapat dimodifikasi sesuai kebutuhan spesifik</div>
              </li>
              <li class="flex items-start">
                <span class="text-emerald-400 mr-3">•</span>
                <div><strong class="text-emerald-300">Cost Control</strong> - Tidak ada licensing fee yang mahal</div>
              </li>
              <li class="flex items-start">
                <span class="text-emerald-400 mr-3">•</span>
                <div><strong class="text-emerald-300">Data Privacy</strong> - Data training dan inference tetap in-house</div>
              </li>
            </ul>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 border-l-4 border-emerald-400 pl-4">Granite Model Family</h2>
          <p class="mb-4">IBM Granite terdiri dari berbagai model yang dioptimalkan untuk use case berbeda:</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div class="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
              <h4 class="text-emerald-300 font-semibold mb-2">Granite Code</h4>
              <p class="text-sm text-gray-300">Untuk code generation dan programming assistance</p>
            </div>
            <div class="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
              <h4 class="text-emerald-300 font-semibold mb-2">Granite Language</h4>
              <p class="text-sm text-gray-300">Untuk natural language processing</p>
            </div>
            <div class="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
              <h4 class="text-emerald-300 font-semibold mb-2">Granite Guardian</h4>
              <p class="text-sm text-gray-300">Untuk AI safety dan content moderation</p>
            </div>
            <div class="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
              <h4 class="text-emerald-300 font-semibold mb-2">Granite Timeseries</h4>
              <p class="text-sm text-gray-300">Untuk forecasting dan time series analysis</p>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 border-l-4 border-emerald-400 pl-4">InstructLab: Democratizing AI Development</h2>
          <p class="mb-4">InstructLab adalah metodologi revolusioner yang memungkinkan komunitas untuk:</p>
          <div class="bg-gray-800/50 rounded-lg p-6 mb-6">
            <ul class="space-y-2">
              <li class="text-gray-300">✓ Melatih model dengan data domain-specific</li>
              <li class="text-gray-300">✓ Menggunakan synthetic data generation</li>
              <li class="text-gray-300">✓ Melakukan distributed training</li>
              <li class="text-gray-300">✓ Menggabungkan kontribusi dari multiple contributors</li>
            </ul>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 border-l-4 border-emerald-400 pl-4">Implementasi untuk Developer Indonesia</h2>
          <p class="mb-4">Developer Indonesia dapat memanfaatkan Granite untuk:</p>
          
          <h3 class="text-xl font-semibold text-emerald-300 mb-3">1. Bahasa Indonesia NLP</h3>
          <div class="bg-gray-900 rounded-lg p-4 mb-6">
            <pre class="text-sm text-gray-300"><code># Fine-tuning Granite untuk Bahasa Indonesia
from transformers import AutoTokenizer, AutoModelForCausalLM

model_name = "ibm-granite/granite-3b-code-instruct"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name)

# Custom training untuk Bahasa Indonesia
training_data = [
    "Jelaskan konsep machine learning dalam bahasa Indonesia",
    "Bagaimana cara implementasi REST API dengan Python?",
    # ... more Indonesian data
]</code></pre>
          </div>
          
          <h3 class="text-xl font-semibold text-emerald-300 mb-3">2. Code Generation untuk Local Context</h3>
          <div class="bg-gray-900 rounded-lg p-4 mb-6">
            <pre class="text-sm text-gray-300"><code># Granite untuk Indonesian coding standards
prompt = """
Buatkan function Python untuk validasi NIK Indonesia:
- NIK harus 16 digit
- Validasi format tanggal lahir
- Validasi kode wilayah
"""

response = model.generate(prompt, max_length=500)</code></pre>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 border-l-4 border-emerald-400 pl-4">Keuntungan untuk Ecosystem Indonesia</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div class="bg-emerald-900/20 rounded-lg p-4 border border-emerald-500/30">
              <h4 class="text-emerald-300 font-semibold mb-2">Sovereignty</h4>
              <p class="text-sm text-gray-300">Indonesia dapat mengembangkan AI sendiri</p>
            </div>
            <div class="bg-emerald-900/20 rounded-lg p-4 border border-emerald-500/30">
              <h4 class="text-emerald-300 font-semibold mb-2">Local Innovation</h4>
              <p class="text-sm text-gray-300">Mendorong startup AI lokal</p>
            </div>
            <div class="bg-emerald-900/20 rounded-lg p-4 border border-emerald-500/30">
              <h4 class="text-emerald-300 font-semibold mb-2">Education</h4>
              <p class="text-sm text-gray-300">Universitas dapat menggunakan untuk research</p>
            </div>
            <div class="bg-emerald-900/20 rounded-lg p-4 border border-emerald-500/30">
              <h4 class="text-emerald-300 font-semibold mb-2">Government</h4>
              <p class="text-sm text-gray-300">Implementasi AI untuk layanan publik</p>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 border-l-4 border-emerald-400 pl-4">Roadmap Kontribusi</h2>
          <p class="mb-4">Developer Indonesia dapat berkontribusi melalui:</p>
          <div class="bg-gray-800/50 rounded-lg p-6 mb-6">
            <ol class="space-y-3">
              <li class="flex items-start">
                <span class="text-emerald-400 mr-3 font-bold">1.</span>
                <div>Menyediakan dataset Bahasa Indonesia berkualitas</div>
              </li>
              <li class="flex items-start">
                <span class="text-emerald-400 mr-3 font-bold">2.</span>
                <div>Mengembangkan model turunan untuk use case lokal</div>
              </li>
              <li class="flex items-start">
                <span class="text-emerald-400 mr-3 font-bold">3.</span>
                <div>Membuat tutorial dan dokumentasi dalam Bahasa Indonesia</div>
              </li>
              <li class="flex items-start">
                <span class="text-emerald-400 mr-3 font-bold">4.</span>
                <div>Berpartisipasi dalam InstructLab community</div>
              </li>
            </ol>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 border-l-4 border-emerald-400 pl-4">Tantangan dan Peluang</h2>
          <p class="mb-4">Adopsi open source AI di Indonesia menghadapi tantangan:</p>
          <div class="bg-red-900/20 rounded-lg p-4 border border-red-500/30 mb-4">
            <ul class="space-y-2 text-sm">
              <li class="text-red-300">• Keterbatasan infrastruktur komputasi</li>
              <li class="text-red-300">• Skill gap dalam AI development</li>
              <li class="text-red-300">• Regulasi yang masih berkembang</li>
            </ul>
          </div>
          <div class="bg-emerald-900/20 rounded-lg p-4 border border-emerald-500/30">
            <p class="text-emerald-300 font-semibold">Namun peluangnya sangat besar untuk menciptakan AI yang truly Indonesian.</p>
          </div>
        </div>
      `,
      4: `
        <div class="prose prose-invert max-w-none">
          <div class="mb-8">
            <p class="text-lg leading-relaxed mb-6">Mainframe sering dianggap sebagai teknologi legacy, namun IBM membuktikan sebaliknya dengan IBM z17 dan Power11 yang mengintegrasikan AI acceleration langsung ke dalam processor. Ini adalah revolusi dalam enterprise computing yang menggabungkan keandalan mainframe dengan kekuatan AI modern.</p>
          </div>
          
          <h2 class="text-2xl font-bold text-white mb-4 border-l-4 border-orange-400 pl-4">Evolution of Mainframe Architecture</h2>
          <p class="mb-4">Mainframe telah berevolusi dari simple batch processing menjadi platform AI yang sophisticated:</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div class="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
              <h4 class="text-orange-300 font-semibold mb-2">Traditional Mainframe</h4>
              <ul class="text-sm text-gray-300 space-y-1">
                <li>• Batch processing</li>
                <li>• COBOL applications</li>
                <li>• Centralized computing</li>
                <li>• Limited scalability</li>
              </ul>
            </div>
            <div class="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
              <h4 class="text-orange-300 font-semibold mb-2">Modern AI-Enabled Mainframe</h4>
              <ul class="text-sm text-gray-300 space-y-1">
                <li>• Real-time AI inference</li>
                <li>• Hybrid cloud native</li>
                <li>• Container orchestration</li>
                <li>• Elastic scalability</li>
              </ul>
            </div>
          </div>

          <div class="bg-orange-900/20 rounded-lg p-6 mb-6 border border-orange-500/30">
            <h4 class="text-orange-300 font-semibold mb-4">Key Innovations dalam Modern Mainframe</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 class="text-white font-semibold mb-2">Hybrid Cloud Native</h5>
                <p class="text-sm text-gray-300">Support untuk containerization dan Kubernetes</p>
              </div>
              <div>
                <h5 class="text-white font-semibold mb-2">AI-Accelerated</h5>
                <p class="text-sm text-gray-300">Built-in AI inference capabilities</p>
              </div>
              <div>
                <h5 class="text-white font-semibold mb-2">Real-time Analytics</h5>
                <p class="text-sm text-gray-300">Processing triliunan transaksi per hari</p>
              </div>
              <div>
                <h5 class="text-white font-semibold mb-2">Quantum-Safe Security</h5>
                <p class="text-sm text-gray-300">Pervasive encryption dan quantum-resistant cryptography</p>
              </div>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 border-l-4 border-orange-400 pl-4">IBM z17: AI for Mission-Critical Workloads</h2>
          <p class="mb-4">z17 processor menghadirkan breakthrough dalam enterprise AI dengan integrated accelerator yang revolusioner:</p>
          
          <h3 class="text-xl font-semibold text-orange-300 mb-3">Integrated AI Accelerator</h3>
          <div class="bg-gray-800/50 rounded-lg p-6 mb-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="text-center">
                <div class="text-3xl font-bold text-orange-400 mb-2">20x</div>
                <div class="text-sm text-gray-300">Faster AI inference dibanding generasi sebelumnya</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-orange-400 mb-2">&lt;1ms</div>
                <div class="text-sm text-gray-300">Latency untuk AI decision making</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-orange-400 mb-2">99.999%</div>
                <div class="text-sm text-gray-300">Availability untuk mission-critical apps</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-orange-400 mb-2">Native</div>
                <div class="text-sm text-gray-300">Support untuk TensorFlow dan PyTorch</div>
              </div>
            </div>
          </div>

          <h3 class="text-xl font-semibold text-orange-300 mb-3">Real-time Fraud Detection Implementation</h3>
          <div class="bg-gray-900 rounded-lg p-4 mb-6">
            <pre class="text-sm text-gray-300"><code>// Real-time fraud detection pada z17
public class Z17FraudDetector {
    
    @Autowired
    private Z17AIAccelerator aiAccelerator;
    
    public FraudAnalysis analyzTransaction(Transaction transaction) {
        // Ekstrak features untuk AI model
        double[] features = {
            transaction.getAmount(),
            transaction.getMerchantRisk(),
            customer.getAverageSpending(),
            location.getRiskScore(),
            timePattern.getAnomalyScore()
        };
        
        // AI inference dengan hardware acceleration
        double fraudScore = aiAccelerator.predict(
            modelName: "fraud-detection-v3",
            features: features,
            latencyTarget: "sub-millisecond"
        );
        
        if (fraudScore > 0.85) {
            // Real-time blocking dengan audit trail
            return new FraudAnalysis(
                action: "BLOCK_TRANSACTION",
                confidence: fraudScore,
                reason: "High-risk pattern detected",
                processingTime: aiAccelerator.getLastInferenceTime()
            );
        }
        
        return FraudAnalysis.approved();
    }
}</code></pre>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 border-l-4 border-orange-400 pl-4">IBM Power11: AI for Hybrid Cloud</h2>
          <p class="mb-4">Power11 dirancang khusus untuk workload AI yang demanding dengan arsitektur yang revolutionary:</p>
          
          <h3 class="text-xl font-semibold text-orange-300 mb-3">Matrix Math Accelerator (MMA)</h3>
          <div class="bg-gray-800/50 rounded-lg p-6 mb-6">
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-orange-400 mr-3">•</span>
                <div><strong class="text-orange-300">Hardware acceleration</strong> untuk machine learning operations</div>
              </li>
              <li class="flex items-start">
                <span class="text-orange-400 mr-3">•</span>
                <div><strong class="text-orange-300">10x performance improvement</strong> untuk AI training workloads</div>
              </li>
              <li class="flex items-start">
                <span class="text-orange-400 mr-3">•</span>
                <div><strong class="text-orange-300">Native support</strong> untuk mixed-precision computing</div>
              </li>
              <li class="flex items-start">
                <span class="text-orange-400 mr-3">•</span>
                <div><strong class="text-orange-300">Optimized</strong> untuk large language models dan deep learning</div>
              </li>
            </ul>
          </div>

          <h3 class="text-xl font-semibold text-orange-300 mb-3">SAP HANA dengan Power11 Integration</h3>
          <div class="bg-gray-900 rounded-lg p-4 mb-6">
            <pre class="text-sm text-gray-300"><code>-- Real-time analytics dengan AI di SAP HANA
-- Menggunakan Power11 MMA untuk acceleration

-- Customer churn prediction dengan real-time data
SELECT 
    customer_id,
    customer_name,
    PREDICT_CHURN(
        purchase_history,
        engagement_score,
        support_tickets,
        payment_delays,
        product_usage
    ) as churn_probability,
    RECOMMEND_RETENTION_ACTION(
        customer_segment,
        churn_probability,
        customer_value
    ) as recommended_action
FROM customer_360_view
WHERE last_activity > CURRENT_DATE - 30
  AND customer_status = 'ACTIVE'
ORDER BY churn_probability DESC
LIMIT 1000;

-- AI-powered demand forecasting
SELECT 
    product_id,
    region,
    FORECAST_DEMAND(
        historical_sales,
        seasonal_patterns,
        market_trends,
        economic_indicators
    ) as predicted_demand,
    OPTIMIZE_INVENTORY(
        current_stock,
        predicted_demand,
        supply_lead_time
    ) as optimal_stock_level
FROM product_sales_data
WHERE forecast_horizon = '90_DAYS';</code></pre>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 border-l-4 border-orange-400 pl-4">Modernization Strategy</h2>
          <p class="mb-4">Enterprise dapat memodernisasi mainframe infrastructure melalui pendekatan yang structured:</p>
          
          <h3 class="text-xl font-semibold text-orange-300 mb-3">1. Containerization with Red Hat OpenShift</h3>
          <div class="bg-gray-900 rounded-lg p-4 mb-6">
            <pre class="text-sm text-gray-300"><code># Deploy AI model di z/OS container dengan OpenShift
apiVersion: apps/v1
kind: Deployment
metadata:
  name: fraud-detection-api
  namespace: banking-ai
spec:
  replicas: 3
  selector:
    matchLabels:
      app: fraud-detection
  template:
    metadata:
      labels:
        app: fraud-detection
    spec:
      containers:
      - name: fraud-api
        image: zos-registry/fraud-detection:v2.1
        ports:
        - containerPort: 8080
        resources:
          requests:
            memory: "2Gi"
            cpu: "1000m"
            ai-accelerator: "1"
          limits:
            memory: "4Gi"
            cpu: "2000m"
            ai-accelerator: "2"
        env:
        - name: AI_MODEL_PATH
          value: "/models/fraud-detection-v3"
        - name: INFERENCE_TIMEOUT
          value: "100ms"</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-orange-300 mb-3">2. API-First Microservices Architecture</h3>
          <div class="bg-gray-900 rounded-lg p-4 mb-6">
            <pre class="text-sm text-gray-300"><code>// Expose mainframe AI capabilities via REST API
@RestController
@RequestMapping("/api/v1/ai")
public class MainframeAIController {
    
    @Autowired
    private Z17AIService z17Service;
    
    @Autowired
    private Power11MLService power11Service;
    
    @PostMapping("/fraud-analysis")
    public ResponseEntity<FraudAnalysis> analyzeFraud(
        @RequestBody @Valid TransactionRequest request) {
        
        var analysis = z17Service.analyzeFraud(
            request.getTransaction(),
            AnalysisOptions.builder()
                .realTime(true)
                .confidenceThreshold(0.85)
                .auditTrail(true)
                .build()
        );
        
        return ResponseEntity.ok(analysis);
    }
    
    @PostMapping("/demand-forecast")
    public ResponseEntity<DemandForecast> forecastDemand(
        @RequestBody @Valid ForecastRequest request) {
        
        var forecast = power11Service.generateForecast(
            request.getHistoricalData(),
            request.getTimeHorizon(),
            ForecastOptions.builder()
                .includeSeasonality(true)
                .confidenceInterval(0.95)
                .build()
        );
        
        return ResponseEntity.ok(forecast);
    }
}</code></pre>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 border-l-4 border-orange-400 pl-4">Benefits untuk Enterprise Indonesia</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div class="bg-orange-900/20 rounded-lg p-4 border border-orange-500/30">
              <h4 class="text-orange-300 font-semibold mb-2">Banking & Finance</h4>
              <ul class="text-sm text-gray-300 space-y-1">
                <li>• Real-time fraud detection</li>
                <li>• Credit risk assessment</li>
                <li>• Regulatory compliance</li>
                <li>• High-frequency trading</li>
              </ul>
            </div>
            <div class="bg-orange-900/20 rounded-lg p-4 border border-orange-500/30">
              <h4 class="text-orange-300 font-semibold mb-2">Retail & E-commerce</h4>
              <ul class="text-sm text-gray-300 space-y-1">
                <li>• Personalized recommendations</li>
                <li>• Inventory optimization</li>
                <li>• Dynamic pricing</li>
                <li>• Customer analytics</li>
              </ul>
            </div>
            <div class="bg-orange-900/20 rounded-lg p-4 border border-orange-500/30">
              <h4 class="text-orange-300 font-semibold mb-2">Manufacturing</h4>
              <ul class="text-sm text-gray-300 space-y-1">
                <li>• Predictive maintenance</li>
                <li>• Quality control AI</li>
                <li>• Supply chain optimization</li>
                <li>• Production planning</li>
              </ul>
            </div>
            <div class="bg-orange-900/20 rounded-lg p-4 border border-orange-500/30">
              <h4 class="text-orange-300 font-semibold mb-2">Government & Public</h4>
              <ul class="text-sm text-gray-300 space-y-1">
                <li>• Citizen service optimization</li>
                <li>• Smart city analytics</li>
                <li>• Tax fraud detection</li>
                <li>• Policy impact analysis</li>
              </ul>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 border-l-4 border-orange-400 pl-4">ROI dan Business Impact</h2>
          <p class="mb-4">Implementasi AI-enabled mainframe menghasilkan measurable business outcomes:</p>
          <div class="bg-green-900/20 rounded-lg p-6 mb-6 border border-green-500/30">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="text-center">
                <div class="text-3xl font-bold text-green-400 mb-2">40%</div>
                <div class="text-sm text-gray-300">Reduction dalam false positive fraud detection</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-green-400 mb-2">60%</div>
                <div class="text-sm text-gray-300">Faster time-to-insight untuk business analytics</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-green-400 mb-2">25%</div>
                <div class="text-sm text-gray-300">Improvement dalam operational efficiency</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-green-400 mb-2">90%</div>
                <div class="text-sm text-gray-300">Reduction dalam AI inference latency</div>
              </div>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 border-l-4 border-orange-400 pl-4">Migration Roadmap</h2>
          <p class="mb-4">Roadmap modernisasi yang recommended untuk enterprise Indonesia:</p>
          <div class="bg-gray-800/50 rounded-lg p-6 mb-6">
            <ol class="space-y-4">
              <li class="flex items-start">
                <span class="text-orange-400 mr-3 font-bold text-lg">1.</span>
                <div>
                  <strong class="text-orange-300">Assessment & Planning</strong>
                  <p class="text-sm text-gray-300 mt-1">Audit existing workloads, dependencies, dan business requirements</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-orange-400 mr-3 font-bold text-lg">2.</span>
                <div>
                  <strong class="text-orange-300">Infrastructure Modernization</strong>
                  <p class="text-sm text-gray-300 mt-1">Upgrade ke z17/Power11 dengan AI acceleration capabilities</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-orange-400 mr-3 font-bold text-lg">3.</span>
                <div>
                  <strong class="text-orange-300">Containerization</strong>
                  <p class="text-sm text-gray-300 mt-1">Migrate aplikasi ke container-based architecture dengan OpenShift</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-orange-400 mr-3 font-bold text-lg">4.</span>
                <div>
                  <strong class="text-orange-300">AI Integration</strong>
                  <p class="text-sm text-gray-300 mt-1">Implement AI models untuk business logic dan decision making</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-orange-400 mr-3 font-bold text-lg">5.</span>
                <div>
                  <strong class="text-orange-300">Hybrid Cloud Connection</strong>
                  <p class="text-sm text-gray-300 mt-1">Connect dengan public cloud untuk burst workloads dan data analytics</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-orange-400 mr-3 font-bold text-lg">6.</span>
                <div>
                  <strong class="text-orange-300">Optimization & Scaling</strong>
                  <p class="text-sm text-gray-300 mt-1">Continuous tuning untuk performance, cost, dan business outcomes</p>
                </div>
              </li>
            </ol>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 border-l-4 border-orange-400 pl-4">Future of AI-Enabled Mainframe</h2>
          <p class="mb-4">Mainframe akan continue evolving dengan emerging technologies:</p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-orange-900/20 rounded-lg p-4 border border-orange-500/30">
              <h4 class="text-orange-300 font-semibold mb-2">Quantum Integration</h4>
              <p class="text-sm text-gray-300">Hybrid classical-quantum computing untuk complex optimization</p>
            </div>
            <div class="bg-orange-900/20 rounded-lg p-4 border border-orange-500/30">
              <h4 class="text-orange-300 font-semibold mb-2">Edge Computing</h4>
              <p class="text-sm text-gray-300">Distributed AI inference dari mainframe ke edge devices</p>
            </div>
            <div class="bg-orange-900/20 rounded-lg p-4 border border-orange-500/30">
              <h4 class="text-orange-300 font-semibold mb-2">Neuromorphic Computing</h4>
              <p class="text-sm text-gray-300">Brain-inspired computing untuk ultra-low power AI</p>
            </div>
          </div>
        </div>
      `
    };

    return contents[id] || '<p>Konten artikel sedang dalam pengembangan. Silakan coba artikel lainnya.</p>';
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-gray-700">
          {/* Header */}
          <div className="relative">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute top-4 right-4">
              <button
                onClick={onClose}
                className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="absolute bottom-4 left-4">
              <span className={`px-3 py-1 text-xs font-medium border rounded-full backdrop-blur-sm ${getTagColor(article.tag)}`}>
                {article.tag}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 overflow-y-auto max-h-[calc(90vh-16rem)]">
            {/* Meta info */}
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
              <span>{article.author || 'Tim TechaBlog'}</span>
              <span>•</span>
              <span>{article.publishedDate || '15 Agustus 2025'}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Content */}
            <div 
              className="text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: getArticleContent(article.id) }}
            />

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-400">Bagikan artikel ini:</span>
                  <div className="flex gap-2">
                    <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </button>
                    <button className="p-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </button>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleModal;
